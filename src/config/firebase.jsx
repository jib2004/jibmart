// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPcDuD8IxFu-MvJiZX8ppJNY5TYuHSaaE",
  authDomain: "jibs-mart.firebaseapp.com",
  projectId: "jibs-mart",
  storageBucket: "jibs-mart.appspot.com",
  messagingSenderId: "623030096436",
  appId: "1:623030096436:web:a5a77da95dc71f839d7061",
  measurementId: "G-EFB2ND3LEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const facebookProvider = new FacebookAuthProvider(app)
const analytics = getAnalytics(app);