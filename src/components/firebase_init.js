// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKf3oSv2dlupBDlu8lRKDCuYg1xJ_9x9k",
    authDomain: "dragon-news-c370e.firebaseapp.com",
    projectId: "dragon-news-c370e",
    storageBucket: "dragon-news-c370e.firebasestorage.app",
    messagingSenderId: "976318225762",
    appId: "1:976318225762:web:3c55c327708a934d00a03b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth