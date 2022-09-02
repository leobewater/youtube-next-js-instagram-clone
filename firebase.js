// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBliBSr6DANdSk-0i88kI6zUR_-kD_emXE",
    authDomain: "nextjs-instagram-d49b8.firebaseapp.com",
    projectId: "nextjs-instagram-d49b8",
    storageBucket: "nextjs-instagram-d49b8.appspot.com",
    messagingSenderId: "1089239801474",
    appId: "1:1089239801474:web:4ed9e3d44fe629a8cc1e9b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }