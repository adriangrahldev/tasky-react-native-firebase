// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from '@firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdUYC45U0E0Q3BC3WoKPuOrERVWvD7JBY",
  authDomain: "hangman-challenge-cff25.firebaseapp.com",
  projectId: "hangman-challenge-cff25",
  storageBucket: "hangman-challenge-cff25.appspot.com",
  messagingSenderId: "975130523286",
  appId: "1:975130523286:web:67f426aaa182ebedbb34b7",
  measurementId: "G-J02BWYEFS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(),
});

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile};