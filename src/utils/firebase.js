// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKGNHCrVYzMqlZB9LXhc-2JqWAQ2Pxhcw",
  authDomain: "netflixgpt-c50c3.firebaseapp.com",
  projectId: "netflixgpt-c50c3",
  storageBucket: "netflixgpt-c50c3.firebasestorage.app",
  messagingSenderId: "1013417774618",
  appId: "1:1013417774618:web:f22763fd32c4a18427cba3",
  measurementId: "G-WTTNM3S8J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);