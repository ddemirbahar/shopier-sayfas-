// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO1Xmx2G_8exl1khWa_ftoecCSDYsHiTc",
  authDomain: "shopier-83fb5.firebaseapp.com",
  projectId: "shopier-83fb5",
  storageBucket: "shopier-83fb5.appspot.com",
  messagingSenderId: "136447486529",
  appId: "1:136447486529:web:789f5b7c0eccfce737f4c0",
  measurementId: "G-47BDPJ4RHT"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Authentication servislerini al
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
