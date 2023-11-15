// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqNDD8ATKwbcOJUMtMTG07xU3dDJRgG88",
  authDomain: "netflix-clone-8059d.firebaseapp.com",
  projectId: "netflix-clone-8059d",
  storageBucket: "netflix-clone-8059d.appspot.com",
  messagingSenderId: "249813407822",
  appId: "1:249813407822:web:8595393db6e3fb5396cb1f",
  measurementId: "G-DKVDE6HSXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
