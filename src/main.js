import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueDOMPurifyHTML from 'vue-dompurify-html';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxgr0CK95jGhOyEAHrFOpm9zXP9InfR8",
  authDomain: "dwf-01-dh.firebaseapp.com",
  projectId: "dwf-01-dh",
  storageBucket: "dwf-01-dh.appspot.com",
  messagingSenderId: "447860334537",
  appId: "1:447860334537:web:476d6b8dafe2df40df9218"
};

// Initialize Firebase
const app_A = initializeApp(firebaseConfig);

const app_B = createApp(App)
                .use(router)
                .use(VueDOMPurifyHTML, {
                  default: {
                      USE_PROFILES: { html: true }                      
                  },
                  ALLOWED_TAGS: ['a'],
                  ALLOWED_ATTR: ['href', 'target']
                })
                .mount('#app');

import './index.css';

