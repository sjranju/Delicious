import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

// Delicious web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE_DvH75YXhxbvT6QMmcUcMDy1hlN9Cp8",
    authDomain: "delicious-afda3.firebaseapp.com",
    projectId: "delicious-afda3",
    storageBucket: "delicious-afda3.appspot.com",
    messagingSenderId: "827397976062",
    appId: "1:827397976062:web:317be5f613d974f8501aaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()