// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7Po2bXmJ5tWjRTEBwCZ81sgaOgTwcyw",
  authDomain: "silent-a3aca.firebaseapp.com",
  projectId: "silent-a3aca",
  storageBucket: "silent-a3aca.appspot.com",
  messagingSenderId: "9680355552",
  appId: "1:9680355552:web:dc5ef59c2165d56b8d1085",
  measurementId: "G-F1Q01YMDFK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
