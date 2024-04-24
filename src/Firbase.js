// Import the functions you need from the Firebase SDKs
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-clone-new-bca76.firebaseapp.com",
  projectId: "netflix-clone-new-bca76",
  storageBucket: "netflix-clone-new-bca76.appspot.com",
  messagingSenderId: "970769220044",
  appId: "1:970769220044:web:0e861d2cdfab06a4f1dd69",
  measurementId: "G-D3LTFQC73M",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
