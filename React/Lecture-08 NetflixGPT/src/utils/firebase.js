// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPDGeFTVWz7oOftiuojCKPlajGHBZMuZE",
  authDomain: "netflix-gpt-b2850.firebaseapp.com",
  projectId: "netflix-gpt-b2850",
  storageBucket: "netflix-gpt-b2850.firebasestorage.app",
  messagingSenderId: "433436833134",
  appId: "1:433436833134:web:c696be501168d0d36ebd7f",
  measurementId: "G-K9BXECJ35R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();