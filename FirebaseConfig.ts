// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoUwSlOr_av5llsI3yrxWpP0jGWs-HuIA",
  authDomain: "my-notes-d01ed.firebaseapp.com",
  projectId: "my-notes-d01ed",
  storageBucket: "my-notes-d01ed.appspot.com",
  messagingSenderId: "288405413531",
  appId: "1:288405413531:web:d549c75995ecdf0b37703e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(app)