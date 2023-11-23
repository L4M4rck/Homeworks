// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMFbiseih8fDgjNLVc31ZquMbT94r3faY",
  authDomain: "challenges-e3589.firebaseapp.com",
  projectId: "challenges-e3589",
  storageBucket: "challenges-e3589.appspot.com",
  messagingSenderId: "775409494548",
  appId: "1:775409494548:web:59b894095cd8ef4dba1501",
  measurementId: "G-R1YMMGBC4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }