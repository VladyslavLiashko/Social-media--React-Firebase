
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyBJ-WyHpogJmqNiju8fsstnjDenT2Ahzuw",
  authDomain: "social-media-pt-1.firebaseapp.com",
  projectId: "social-media-pt-1",
  storageBucket: "social-media-pt-1.appspot.com",
  messagingSenderId: "663590987835",
  appId: "1:663590987835:web:3ea1b8a29f967d4b2c541e"
};


export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider() 