// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCJCUSZDW2YsqyrFo1kNyVWT2g6wJcWw",
  authDomain: "beneditotech-8ec64.firebaseapp.com",
  projectId: "beneditotech-8ec64",
  storageBucket: "beneditotech-8ec64.appspot.com",
  messagingSenderId: "1009575854525",
  appId: "1:1009575854525:web:7e5bb3accc34c609c4d2d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
