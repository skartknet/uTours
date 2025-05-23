<template>
<uui-modal-container>
  <uui-modal-dialog>
    <h1>My Modal</h1>
    <p>My modal content</p>
  </uui-modal-dialog>
</uui-modal-container>
<!--
  <div class="tours-editor">
    <h1>uTours - Tour Editor</h1>
    <div class="tour" v-for="tour in tours" :key="tour.id">
      <h2>{{ tour.name }}</h2>
      <button>Edit</button>
    </div>

    <button @click="toggleNewTourForm">New tour</button>
    <div v-show="showNewTourForm" class="new-tour-form">
      <input type="text" placeholder="Enter tour name" />
      <button @click="saveNewTour">Save</button>
    </div>
  </div> -->
</template>


<script>
const UMB_STORAGE_TOKEN_RESPONSE_NAME = 'umb:userAuthTokenResponse';

export default {
  data() {
    return {
      tokenResponse: null,
      tours: [],
      showNewTourForm: false
    }
  },
  created(){
    window.addEventListener('storage', this.onStorageEvent.bind(this));
  },
  async mounted() {
    await this.setInitialState();
    this.getTours();

  },
  unmounted(){
    window.removeEventListener('storage', this.onStorageEvent.bind(this));
  },
  methods: {

    async onStorageEvent(storageEvent) {
      if (storageEvent.key === UMB_STORAGE_TOKEN_RESPONSE_NAME) {

        // Refresh the local storage state into memory
        await this.setInitialState();

        // Let any auth listeners (such as the auth modal) know that the auth state has changed
        this.authorizationSignal.next();
      }
	  },
    getTours() {
      const accessToken = this.getAccessToken();

      fetch('/umbraco/management/api/v1/utours', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })

        .then(async (response) => {
          if (response.ok) {
            this.tours = await response.json();
          } else {
            console.error('Error fetching tours:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error fetching tours:', error);
        });
    },
    saveNewTour() {
      const accessToken = this.getAccessToken();
      const newTourName = document.querySelector('.new-tour-form input').value;


      fetch('/umbraco/management/api/v1/utours', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTourName)
      })
        .then(async (response) => {
          if (response.ok) {
            const newTour = await response.json();
            this.tours.push(newTour);
            this.showNewTourForm = false; // Hide the form after saving
          } else {
            console.error('Error saving new tour:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error saving new tour:', error);
        });

    },
    async setInitialState() {
      const tokenResponseJson = JSON.parse(localStorage.getItem(UMB_STORAGE_TOKEN_RESPONSE_NAME));
      if (tokenResponseJson) {
        this.tokenResponse = tokenResponseJson;
      }
	  },
    getAccessToken() {
      if (this.getTokenExpiration() < 50) {
        this.reissueAccessToken();
      }

      if(!this.tokenResponse) return null;

      return this.tokenResponse.access_token;
    },
    getRefreshToken() {
      if(!this.tokenResponse) return null;
      return this.tokenResponse.refresh_token;
    },

    getTokenExpiration() {
      const authToken = JSON.parse(localStorage.getItem(UMB_STORAGE_TOKEN_RESPONSE_NAME));

      const expiresIn = Number(authToken.expires_in); // Time in seconds
      const issuedAt = Number(authToken.issued_at || Date.now() / 1000); // When the token was issued
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      const remainingTime = issuedAt + expiresIn - currentTime;
      return remainingTime;
    },

    reissueAccessToken() {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) {
        // we are logged out
        return;
      }

      const body = new URLSearchParams();
      body.append('grant_type', 'refresh_token');
      body.append('refresh_token', refreshToken);
      body.append('client_id', 'umbraco-back-office');

      fetch('/umbraco/management/api/v1/security/back-office/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
      })
        .then(async (response) => {
          if (response.ok) {
            const tokenResponse = await response.json();
            localStorage.setItem(UMB_STORAGE_TOKEN_RESPONSE_NAME, JSON.stringify(tokenResponse));
          }
        })
        .catch(error => {
          console.error('Error during reauthentication:', error);
        });
    },
    toggleNewTourForm() {
      this.showNewTourForm = !this.showNewTourForm;
    }
  },
  name: 'ToursEditor'
};
</script>

<style scoped>
.tours-editor {
  position: absolute;
  height: 300px;
  top: 0;
  right: 0;
  background-color: grey;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
