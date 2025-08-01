import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@umbraco-ui/uui';
import { TokenResponseJson } from '@umbraco-cms/backoffice/external/openid';
import Tour from './Tour.js';
import { AuthService } from './AuthService.js';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

import './styles/uui-theme.css';

import { UUITextStyles } from '@umbraco-ui/uui-css';

@customElement('utours-editor')
export class UToursEditor extends UmbLitElement {

  private authService = new AuthService();

  @state()
  tours: Array<Tour> = [];

  @state()
  showNewTourForm: boolean = false;

  @state()
  errorMessage: string = '';

  @state()
  isLoading: boolean = false;

  static styles = [
    UUITextStyles,
    css`
      .container {
        background-color: var(--uui-color-surface);
        padding: var(--uui-size-space-4);
        font-family: var(--uui-font-family);
        color: var(--uui-color-text);
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--uui-size-space-4);
        padding-bottom: var(--uui-size-space-3);
        border-bottom: 1px solid var(--uui-color-border);
      }

      .header h1 {
        margin: 0;
        font-size: var(--uui-type-h2-size);
        font-weight: var(--uui-font-weight-bold);
        color: var(--uui-color-text-headline);
      }

      .new-tour-form {
        margin-top: var(--uui-size-space-4);
        padding: var(--uui-size-space-4);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface-alt);
        box-shadow: var(--uui-shadow-depth-1);
      }

      .new-tour-form uui-input {
        width: 100%;
        margin-bottom: var(--uui-size-space-3);
      }

      .new-tour-form uui-button {
        margin-left: var(--uui-size-space-2);
      }

      .button-group {
        display: flex;
        gap: var(--uui-size-space-2);
        align-items: center;
      }

      .tour-list {
        margin-top: var(--uui-size-space-4);
      }

      .tour-item {
        padding: var(--uui-size-space-3);
        margin-bottom: var(--uui-size-space-2);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface);
        transition: var(--uui-transition-default);
      }

      .tour-item:hover {
        background-color: var(--uui-color-surface-emphasis);
        border-color: var(--uui-color-border-emphasis);
      }

      .tour-item h2 {
        margin: 0 0 var(--uui-size-space-2) 0;
        font-size: var(--uui-type-h5-size);
        color: var(--uui-color-text-headline);
      }

      .loading-state {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-2);
        padding: var(--uui-size-space-3);
        color: var(--uui-color-text-alt);
      }

      .empty-state {
        text-align: center;
        padding: var(--uui-size-space-6);
        color: var(--uui-color-text-alt);
      }

      uui-box {
        margin-bottom: var(--uui-size-space-3);
      }
  `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.#checkAuthAndLoad();
  }

  /**
   * Check authentication status and load tours if authenticated
   */
  async #checkAuthAndLoad() {
    try {
      // Check if user is authenticated
      if (!this.authService.isTokenValid()) {
        this.errorMessage = 'Please log in to the Umbraco backoffice to use this feature.';
        return;
      }

      // Check if token needs refresh
      if (this.authService.shouldRefreshToken()) {
        const refreshed = await this.authService.refreshToken();
        if (!refreshed) {
          this.errorMessage = 'Your session has expired. Please log in again.';
          return;
        }
      }

      // Load tours
      await this.#getTours();
    } catch (error) {
      console.error('Error during authentication check:', error);
      this.errorMessage = 'Failed to authenticate. Please try refreshing the page.';
    }
  }

  render() {
    return html`
      <div class="uui-text uui-font">
        <uui-modal-container>
          <uui-modal-sidebar size="medium">
            <div class="container uui-font uui-text">
                <div class="header">
                  <h1>uTours Visual Editor</h1>
                  <div class="button-group">
                    <uui-button @click=${this.#refreshTours} look="secondary" color="default">
                      <uui-icon name="refresh"></uui-icon>
                      Refresh
                    </uui-button>
                  </div>
                </div>

                ${this.errorMessage ? html`
                  <uui-box color="danger">
                    <p>Error: ${this.errorMessage}</p>
                  </uui-box>
                ` : ''}

                ${this.isLoading ? html`
                  <div class="loading-state">
                    <uui-loader></uui-loader>
                    <p>Loading tours...</p>
                  </div>
                ` : ''}

                <p>Editor loaded successfully! Tours count: ${this.tours.length}</p>

                <div class="tour-list">
                  ${this.tours.length > 0
        ? this.tours.map((tour) => html`
                        <div class="tour-item">
                          <h2>${tour.name}</h2>
                          <button @click="${this.#deleteTour}" data-id="${tour.id}">Delete</button>
                        </div>
                      `)
        : !this.isLoading ? html`
                        <div class="empty-state">
                          <p>No tours found. Create your first tour!</p>
                        </div>
                      ` : ''
      }
                </div>

                <div class="button-group" style="margin-top: var(--uui-size-space-4);">
                  <uui-button @click=${this.#toggleNewTourForm} look="primary">
                    <uui-icon name="${this.showNewTourForm ? 'close' : 'add'}"></uui-icon>
                    ${this.showNewTourForm ? 'Cancel' : 'Add New Tour'}
                  </uui-button>
                </div>

                ${this.showNewTourForm ? html`
                  <div class="new-tour-form">
                    <uui-input placeholder="Tour name" label="Tour Name"></uui-input>
                    <div class="button-group" style="margin-top: var(--uui-size-space-3);">
                      <uui-button @click=${this.#saveNewTour} look="primary">
                        <uui-icon name="check"></uui-icon>
                        Save Tour
                      </uui-button>
                      <uui-button @click=${this.#toggleNewTourForm} look="secondary">
                        Cancel
                      </uui-button>
                    </div>
                  </div>
                ` : ''}
            </div>
          </uui-modal-sidebar>
        </uui-modal-container>
      </div>
    `;
  }


  async #getTours() {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      // Check if user is authenticated
      if (!this.authService.isTokenValid()) {
        throw new Error('User is not authenticated. Please log in to the Umbraco backoffice.');
      }

      const response = await this.authService.authenticatedFetch('/umbraco/management/api/v1/utours');

      if (!response.ok) {
        throw new Error(`Failed to fetch tours: ${response.status} ${response.statusText}`);
      }

      const tours = await response.json();
      this.tours = tours || [];
    } catch (error) {
      console.error('Error fetching tours:', error);
      this.errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this.tours = [];
    } finally {
      this.isLoading = false;
    }
  }

  async #deleteTour(e: Event) {
    const el = e.currentTarget as HTMLElement;
    const tourId = el.getAttribute('data-id');

    if (!tourId) {
      console.error('No tour ID found');
      return;
    }

    try {
      // Check if user is authenticated
      if (!this.authService.isTokenValid()) {
        throw new Error('User is not authenticated. Please log in to the Umbraco backoffice.');
      }

      const response = await this.authService.authenticatedFetch(`/umbraco/management/api/v1/utours/${tourId}`, {
        method: 'DELETE'
      });

      if (response.status === 200) {
        this.tours = this.tours.filter(tour => tour.id !== tourId);
      } else {
        throw new Error(`Failed to delete tour: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while deleting the tour';
    }
  }

  async #saveNewTour() {
    this.errorMessage = '';

    const inputElement = this.shadowRoot?.querySelector('.new-tour-form uui-input') as any;
    const newTourName = inputElement?.value;

    if (!newTourName) {
      this.errorMessage = 'Tour name is required';
      return;
    }

    try {
      // Check if user is authenticated
      if (!this.authService.isTokenValid()) {
        throw new Error('User is not authenticated. Please log in to the Umbraco backoffice.');
      }

      const response = await this.authService.authenticatedFetch('/umbraco/management/api/v1/utours', {
        method: 'POST',
        body: JSON.stringify(newTourName)
      });

      if (!response.ok) {
        throw new Error(`Failed to save tour: ${response.status} ${response.statusText}`);
      }

      const newTour: Tour = await response.json() as Tour;
      this.tours = [...this.tours, newTour];
      this.showNewTourForm = false;

      // Clear the input
      if (inputElement) {
        inputElement.value = '';
      }
    } catch (error) {
      console.error('Error saving new tour:', error);
      this.errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    }
  }


  #toggleNewTourForm() {
    this.showNewTourForm = !this.showNewTourForm;
  }

  /**
   * Handle logout - clear token and show appropriate message
   */
  #handleLogout() {
    this.authService.clearToken();
    this.tours = [];
    this.errorMessage = 'You have been logged out. Please log in to the Umbraco backoffice.';
  }

  /**
   * Refresh tours manually
   */
  async #refreshTours() {
    await this.#checkAuthAndLoad();
  }

}
