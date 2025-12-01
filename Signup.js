// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz1HNOExBQbl79HpLYa-GT_ukyUrwbCIw",
  authDomain: "drive-and-deal-6a91d.firebaseapp.com",
  projectId: "drive-and-deal-6a91d",
  storageBucket: "drive-and-deal-6a91d.firebasestorage.app",
  messagingSenderId: "261449901118",
  appId: "1:261449901118:web:8ebba21355a4270b47dd6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const submit = document.getElementById("submit").value;
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const auth = getAuth(app);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
