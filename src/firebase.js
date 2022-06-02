// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATW5Kp-NFnQda-Xi3Qm6G_XWK7LGjIKus",
  authDomain: "react-expert.firebaseapp.com",
  projectId: "react-expert",
  storageBucket: "react-expert.appspot.com",
  messagingSenderId: "888202955493",
  appId: "1:888202955493:web:afbe4c86e363528c20620c",
  measurementId: "G-WHPB9XQ0LK"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();