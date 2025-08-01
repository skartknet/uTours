# uTours Authentication Solution

This solution addresses the authentication issue when calling the Umbraco Management API from a frontend application that is not running within the Umbraco backoffice context.

## Problem
The original code was using `umbHttpClient` and `tryExecute` from the Umbraco backoffice, which only work within the backoffice context. When trying to call the Management API from an external frontend application, these tools result in 401 unauthorized errors.

## Solution
Created a custom `AuthService` that:

1. **Reads the auth token** from localStorage (`umb:userauthTokenResponse`)
2. **Validates token expiration** and refreshes it when necessary
3. **Handles automatic token refresh** when the token is about to expire
4. **Provides authenticated fetch** with proper authorization headers
5. **Handles 401 errors** by attempting token refresh and retrying the request

## Key Features

### AuthService.ts
- `getToken()` - Retrieves the current token from localStorage
- `isTokenValid()` - Checks if the token is still valid
- `shouldRefreshToken()` - Determines if token needs refresh (within 5 minutes of expiry)
- `refreshToken()` - Refreshes the access token using the refresh token
- `authenticatedFetch()` - Makes authenticated HTTP requests with automatic token handling
- `clearToken()` - Clears the token (for logout)

### UToursEditor.ts Updates
- Replaced `umbHttpClient` with `AuthService.authenticatedFetch()`
- Added proper error handling and user feedback
- Added loading states and error messages
- Added token validation before making API calls
- Added refresh functionality

## Usage

```typescript
// Initialize the auth service
private authService = new AuthService();

// Make authenticated API calls
const response = await this.authService.authenticatedFetch('/umbraco/management/api/v1/utours');

// Check authentication status
if (!this.authService.isTokenValid()) {
  // Handle unauthenticated state
}
```

## Error Handling
The solution provides comprehensive error handling for:
- Expired tokens
- Missing tokens
- Failed token refresh
- API call failures
- Network errors

## Token Storage
The solution expects the token to be stored in localStorage under the key `umb:userauthTokenResponse`. This is the standard location where Umbraco stores user authentication tokens.

## Security Notes
- Tokens are automatically refreshed when they're about to expire
- The service handles 401 responses by attempting token refresh
- Users are prompted to log in again if token refresh fails
- Tokens are cleared on logout

## Dependencies
- `@umbraco-cms/backoffice/external/openid` - For token type definitions
- Standard Fetch API - For HTTP requests
- Browser localStorage - For token storage

## Integration
This solution can be integrated into any frontend application that needs to authenticate with the Umbraco Management API using the credentials of a logged-in Umbraco user.
