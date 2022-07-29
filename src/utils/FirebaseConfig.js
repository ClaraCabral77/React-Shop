// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIgeh6ZtaxLik-peXqceX0nvFicDst-_U",
  authDomain: "macarrones-heak.firebaseapp.com",
  projectId: "macarrones-heak",
  storageBucket: "macarrones-heak.appspot.com",
  messagingSenderId: "111350907560",
  appId: "1:111350907560:web:52fedb82e237424d97389d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);