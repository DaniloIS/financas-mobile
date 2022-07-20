import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Wiz3FhBN6fq9hkCnT0fLkyUexbe_1SE",
  authDomain: "meuapp-d7abd.firebaseapp.com",
  projectId: "meuapp-d7abd",
  storageBucket: "meuapp-d7abd.appspot.com",
  messagingSenderId: "962442385425",
  appId: "1:962442385425:web:e6cc34d55f238dfc2eb9b0",
  measurementId: "G-P95GL4XMWM"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;