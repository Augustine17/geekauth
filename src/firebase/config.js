// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpw_xlvN9EjDrZnxciLBk8vDAlvRL_K6Y",
  authDomain: "geekauth-b4e52.firebaseapp.com",
  projectId: "geekauth-b4e52",
  storageBucket: "geekauth-b4e52.appspot.com",
  messagingSenderId: "805882369835",
  appId: "1:805882369835:web:52ab149e7ebc11292dd76e",
  measurementId: "G-GDTZJW88M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);