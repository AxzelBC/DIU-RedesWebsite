// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeLQ6_sK7R8tInq6lIGkUiDBfR2vDw8vk",
  authDomain: "diu-lascilab.firebaseapp.com",
  projectId: "diu-lascilab",
  storageBucket: "diu-lascilab.appspot.com",
  messagingSenderId: "725763214462",
  appId: "1:725763214462:web:d25a412706301022001c2f",
  measurementId: "G-XE3ZRLEJZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth}