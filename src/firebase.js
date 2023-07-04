// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApoHSnbutqO72WtVC_9_ALMYKm0Gzuo7I",
  authDomain: "ogani-web-51505.firebaseapp.com",
  projectId: "ogani-web-51505",
  storageBucket: "ogani-web-51505.appspot.com",
  messagingSenderId: "168670941590",
  appId: "1:168670941590:web:e044166d3817cb48b2cdb7",
  measurementId: "G-E01WNNWVWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()