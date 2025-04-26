import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Crog6StOhDa_tvAqKQp7sCVTQLAHpdM",
  authDomain: "prepwise-9b72f.firebaseapp.com",
  projectId: "prepwise-9b72f",
  storageBucket: "prepwise-9b72f.firebasestorage.app",
  messagingSenderId: "1081643911697",
  appId: "1:1081643911697:web:f4ec779925d59055183fb0",
  measurementId: "G-XY9WVSP3D4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);