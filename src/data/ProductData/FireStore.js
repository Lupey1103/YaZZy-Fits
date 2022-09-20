// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF85070zJJXRJVrn0IxFvZ7_jobPCY8TE",
  authDomain: "yazzy-fits.firebaseapp.com",
  projectId: "yazzy-fits",
  storageBucket: "yazzy-fits.appspot.com",
  messagingSenderId: "669666949831",
  appId: "1:669666949831:web:500e6f2844926d0708dce2",
  measurementId: "G-TKK73430T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);