// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM2cDZx7AbWQqCiI04YGmSWZZthWFRvHg",
  authDomain: "college-endgame.firebaseapp.com",
  projectId: "college-endgame",
  storageBucket: "college-endgame.appspot.com",
  messagingSenderId: "706523424207",
  appId: "1:706523424207:web:7d19c345cf7251a20a9eba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);