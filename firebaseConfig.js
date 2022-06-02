// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDgz5ucNURZKmZVSvbv_rBG9E9jhB42Q",
  authDomain: "hoodify-6c09e.firebaseapp.com",
  projectId: "hoodify-6c09e",
  storageBucket: "hoodify-6c09e.appspot.com",
  messagingSenderId: "11663164263",
  appId: "1:11663164263:web:827bb69022345cd5f325c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);