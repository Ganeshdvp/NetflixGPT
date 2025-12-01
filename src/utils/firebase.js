// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hyperflix-d20ac.firebaseapp.com",
  projectId: "hyperflix-d20ac",
  storageBucket: "hyperflix-d20ac.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_SENDER_ID_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();