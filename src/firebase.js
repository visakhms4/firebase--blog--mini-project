// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT_q3b3CJv4ZBQjnqlWJyGAHoCj438l00",
  authDomain: "learning-bfc10.firebaseapp.com",
  projectId: "learning-bfc10",
  storageBucket: "learning-bfc10.appspot.com",
  messagingSenderId: "442552036233",
  appId: "1:442552036233:web:558c28b24d1f8e5c824f58",
  measurementId: "G-T1TCJX5RG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const  auth = getAuth(app);
 export const provider = new GoogleAuthProvider();