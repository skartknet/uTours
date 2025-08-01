// Example usage of the updated uTours Editor with proper authentication

import { UToursEditor } from './UToursEditor.js';

// The component can now be used in any frontend application
// as long as the user is logged into the Umbraco backoffice

// Example 1: Using in a web component
const editor = document.createElement('utours-editor');
document.body.appendChild(editor);

// Example 2: Using the AuthService directly
import { AuthService } from './AuthService.js';

const authService = new AuthService();

// Check if user is authenticated
if (authService.isTokenValid()) {
  console.log('User is authenticated');

  // Make authenticated API calls
  try {
    const response = await authService.authenticatedFetch('/umbraco/management/api/v1/utours');
    const tours = await response.json();
    console.log('Tours:', tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
  }
} else {
  console.log('User is not authenticated');
}

// Example 3: Manual token refresh
if (authService.shouldRefreshToken()) {
  const refreshed = await authService.refreshToken();
  if (refreshed) {
    console.log('Token refreshed successfully');
  } else {
    console.log('Failed to refresh token, user needs to log in again');
  }
}

// Example 4: Error handling
try {
  const response = await authService.authenticatedFetch('/umbraco/management/api/v1/utours', {
    method: 'POST',
    body: JSON.stringify({ name: 'New Tour' })
  });

  if (response.ok) {
    const newTour = await response.json();
    console.log('Tour created:', newTour);
  }
} catch (error) {
  if (error.message.includes('authenticated')) {
    // Handle authentication error
    console.log('Please log in to the Umbraco backoffice');
  } else {
    // Handle other errors
    console.error('API Error:', error);
  }
}
