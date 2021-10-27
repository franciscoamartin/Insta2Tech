// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlbIMISCsd3dsSMTLF2b9hLWHsu2GT9zo",
  authDomain: "instatotech.firebaseapp.com",
  projectId: "instatotech",
  storageBucket: "instatotech.appspot.com",
  messagingSenderId: "571542594968",
  appId: "1:571542594968:web:cae97c8c743fceef8eb7ed"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};