// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, getStore } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDNqHl_Bs9vh9esafRUTBd0PgixWyF54",
  authDomain: "insta-2-yt-4f017.firebaseapp.com",
  projectId: "insta-2-yt-4f017",
  storageBucket: "insta-2-yt-4f017.appspot.com",
  messagingSenderId: "336359657171",
  appId: "1:336359657171:web:21de46044fd4a92dc78e26"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }