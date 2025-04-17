// Miguel Francisco da Silva Sales
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBadSv6ZiY8vHO8nNnyAcat85YXGGguCXY",
  authDomain: "auth-firebase-projeto-au-137f7.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-137f7",
  storageBucket: "auth-firebase-projeto-au-137f7.firebasestorage.app",
  messagingSenderId: "256298045005",
  appId: "1:256298045005:web:21c198dedb332a2b585604",
  measurementId: "G-BXJTBMVW7W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, getDocs, getFirestore};