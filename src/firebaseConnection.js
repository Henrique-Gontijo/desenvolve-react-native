import { initializeApp } from 'fireabse/app';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1jrdvoJQ4tZAYviemdrINaPEQbeI4jwc",
  authDomain: "testes-11ef6.firebaseapp.com",
  projectId: "testes-11ef6",
  storageBucket: "testes-11ef6.firebasestorage.app",
  messagingSenderId: "230664934627",
  appId: "1:230664934627:web:c138cbc54007454ec821d6",
  measurementId: "G-DH309HN34Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {db};