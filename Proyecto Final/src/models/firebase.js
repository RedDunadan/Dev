// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHp7KSIDodcte-OT6Le__PO18s6vCokFE",
  authDomain: "api-rest-tt.firebaseapp.com",
  projectId: "api-rest-tt",
  storageBucket: "api-rest-tt.firebasestorage.app",
  messagingSenderId: "158791971389",
  appId: "1:158791971389:web:ff58f1cda36ec62dc97054",
  measurementId: "G-3VTNH9SHYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };