// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'devlib-2091a.firebaseapp.com',
  projectId: 'devlib-2091a',
  storageBucket: 'devlib-2091a.appspot.com',
  messagingSenderId: '768678120177',
  appId: '1:768678120177:web:158f6ef39d508572dd7750',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
