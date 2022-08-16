import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app'

const fb = require('../fb.json')

Vue.config.productionTip = false

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: fb.YOUR_API_KEY,
  authDomain: fb.YOUR_AUTH_DOMAIN,
  projectId: fb.YOUR_PROJECT_ID,
  storageBucket: fb.YOUR_STORAGE_BUCKET,
  messagingSenderId: fb.YOUR_MESSAGING_SENDER_ID,
  appId: fb.YOUR_APP_ID
};

console.log(firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
