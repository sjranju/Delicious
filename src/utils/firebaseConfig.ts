// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDseaZpVTYwrXzLiE4Ep1NWhIObu-bILuU",
//   authDomain: "delicious-122e9.firebaseapp.com",
//   projectId: "delicious-122e9",
//   storageBucket: "delicious-122e9.appspot.com",
//   messagingSenderId: "512987679095",
//   appId: "1:512987679095:web:77ee0bbc03601c42ef3972"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);