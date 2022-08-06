import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAEkyQRGFfgF--Y1zaA5P7qminH7kMYVA",
  authDomain: "auth-c346f.firebaseapp.com",
  projectId: "auth-c346f",
  storageBucket: "auth-c346f.appspot.com",
  messagingSenderId: "962436653939",
  appId: "1:962436653939:web:9475ea4ee3cba1459a5b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)