// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "trivial-pursuit-788c3.firebaseapp.com",
  projectId: "trivial-pursuit-788c3",
  storageBucket: "trivial-pursuit-788c3.appspot.com",
  messagingSenderId: "293322828497",
  appId: "1:293322828497:web:4cd9568f2601545a8f33f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
