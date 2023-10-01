// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChl5f20_RSw_hZl5MhrJXX7V4519j7XUg",
  authDomain: "ecommerce-lorenzatti.firebaseapp.com",
  projectId: "ecommerce-lorenzatti",
  storageBucket: "ecommerce-lorenzatti.appspot.com",
  messagingSenderId: "81334260483",
  appId: "1:81334260483:web:e2654a7f5d94f57ea90f36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
