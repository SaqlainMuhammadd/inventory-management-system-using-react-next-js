// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7pkEoOKF1K4E3gfWVYF-8Tl-E5seDQ6k",
  authDomain: "inventory-management-7e77c.firebaseapp.com",
  projectId: "inventory-management-7e77c",
  storageBucket: "inventory-management-7e77c.appspot.com",
  messagingSenderId: "44468938346",
  appId: "1:44468938346:web:180986901f4f0373488c13",
  measurementId: "G-N8ZPGSQJ18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}