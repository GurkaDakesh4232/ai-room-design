// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-design-26c77.firebaseapp.com",
  projectId: "ai-design-26c77",
  storageBucket: "ai-design-26c77.firebasestorage.app",
  messagingSenderId: "500896556309",
  appId: "1:500896556309:web:17eab02c988a9474ae351c",
  measurementId: "G-CVM04RMLS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
