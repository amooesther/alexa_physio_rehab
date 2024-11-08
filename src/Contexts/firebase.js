// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6Bjy9uHmQeJkeC_i6ypcBdLJX6FSs9Y",
  authDomain: "alexa-new.firebaseapp.com",
  projectId: "alexa-new",
  storageBucket: "alexa-new.firebasestorage.app",
  messagingSenderId: "1048316349174",
  appId: "1:1048316349174:web:c943263aea63d471d4fad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;