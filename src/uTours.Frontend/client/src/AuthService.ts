import { TokenResponseJson } from '@umbraco-cms/backoffice/external/openid';

interface StoredTokenData extends TokenResponseJson {
  stored_at?: number; // Timestamp when token was stored
}

export class AuthService {
  private readonly TOKEN_KEY = 'umb:userAuthTokenResponse';
  private readonly TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes in milliseconds

  /**
   * Gets the current auth token from localStorage
   */
  getToken(): StoredTokenData | null {
    try {
      const tokenData = localStorage.getItem(this.TOKEN_KEY);
      if (!tokenData) {
        return null;
      }
      return JSON.parse(tokenData) as StoredTokenData;
    } catch (error) {
      console.error('Error parsing token from localStorage:', error);
      return null;
    }
  }

  /**
   * Stores token with timestamp
   */
  private storeToken(token: TokenResponseJson): void {
    const tokenWithTimestamp: StoredTokenData = {
      ...token,
      stored_at: Date.now()
    };
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(tokenWithTimestamp));
  }

  /**
   * Checks if the current token is valid and not expired
   */
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    // Check if token has expired
    if (token.expires_in != null && token.stored_at != null) {
      const expiresIn = typeof token.expires_in === 'string' ? parseInt(token.expires_in) : token.expires_in;
      const storedAt = typeof token.stored_at === 'string' ? parseInt(token.stored_at) : token.stored_at;
      const expirationTime = storedAt + (expiresIn * 1000);
      if (expirationTime <= Date.now()) {
        return false;
      }
    }

    return true;
  }

  /**
   * Checks if the token needs to be refreshed (within 5 minutes of expiration)
   */
  shouldRefreshToken(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    if (token.expires_in != null && token.stored_at != null) {
      const expiresIn = typeof token.expires_in === 'string' ? parseInt(token.expires_in) : token.expires_in;
      const storedAt = typeof token.stored_at === 'string' ? parseInt(token.stored_at) : token.stored_at;
      const expirationTime = storedAt + (expiresIn * 1000);
      const timeUntilExpiry = expirationTime - Date.now();
      return timeUntilExpiry <= this.TOKEN_REFRESH_THRESHOLD;
    }

    return false;
  }

  /**
   * Refreshes the access token using the refresh token
   */
  async refreshToken(): Promise<boolean> {
    const token = this.getToken();
    if (!token?.refresh_token) {
      return false;
    }

    try {
      const response = await fetch('/umbraco/management/api/v1/security/back-office/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: token.refresh_token,
        }),
      });

      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status}`);
      }

      const newToken = await response.json() as TokenResponseJson;
      this.storeToken(newToken);
      return true;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return false;
    }
  }

  /**
   * Makes an authenticated HTTP request with automatic token refresh
   */
  async authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
    // Check if token needs refresh
    if (this.shouldRefreshToken()) {
      const refreshed = await this.refreshToken();
      if (!refreshed) {
        throw new Error('Unable to refresh token. User may need to log in again.');
      }
    }

    // Check if token is valid
    if (!this.isTokenValid()) {
      throw new Error('User is not authenticated. Please log in.');
    }

    const token = this.getToken();
    if (!token) {
      throw new Error('No authentication token available.');
    }

    // Add authorization header
    const headers = {
      ...options.headers,
      'Authorization': `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // If we get a 401, try to refresh the token once
    if (response.status === 401) {
      const refreshed = await this.refreshToken();
      if (refreshed) {
        const newToken = this.getToken();
        if (newToken) {
          // Retry the request with the new token
          const retryHeaders = {
            ...options.headers,
            'Authorization': `Bearer ${newToken.access_token}`,
            'Content-Type': 'application/json',
          };

          return fetch(url, {
            ...options,
            headers: retryHeaders,
          });
        }
      }
      throw new Error('Authentication failed. Please log in again.');
    }

    return response;
  }

  /**
   * Clears the authentication token (for logout)
   */
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
