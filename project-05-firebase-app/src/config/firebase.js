// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUvVzIrLApOHlroMLq_Vpe0VPNxm3dIZ4",
  authDomain: "vite-contact-766fe.firebaseapp.com",
  projectId: "vite-contact-766fe",
  storageBucket: "vite-contact-766fe.appspot.com",
  messagingSenderId: "470340357056",
  appId: "1:470340357056:web:72b7afa5354499fbbd9625"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)