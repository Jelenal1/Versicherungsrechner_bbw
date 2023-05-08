// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1i-9Wqlxlga1UzzHxhaC_v8KJ2DioQ9c",
    authDomain: "damagecalculator-prog-bbw.firebaseapp.com",
    projectId: "damagecalculator-prog-bbw",
    storageBucket: "damagecalculator-prog-bbw.appspot.com",
    messagingSenderId: "227401220195",
    appId: "1:227401220195:web:15e7e69a5639de02c7b856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);