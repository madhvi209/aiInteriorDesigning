// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ai-interior-designer-78a40.firebaseapp.com",
    projectId: "ai-interior-designer-78a40",
    storageBucket: "ai-interior-designer-78a40.firebasestorage.app",
    messagingSenderId: "859971161429",
    appId: "1:859971161429:web:fde3c0a6f3939098d2b3dc",
    measurementId: "G-6N6VCDGFQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)