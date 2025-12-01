import { initializeApp } from "firebase/app";
// Import specific services you need, e.g., for Authentication:
import { getAuth } from "firebase/auth";
// For Firestore:
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AlzaSyDVsROiSzdQwfNwotsHHaqi-7Dk1p5uhC8",
  authDomain: "drive-and-deal-2664a.firebaseapp.com",
  projectId: "drive-and-deal-2664a",
  storageBucket: "drive-and-deal-2664a.appspot.com",
  messagingSenderId: "226773683891",
  appId: "1:226773683891:web:YOUR_APP_ID", // replace with your actual App ID from Firebase console
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized!");
