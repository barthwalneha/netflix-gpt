// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbWXDdeDCQ1UyjYI_73yDbXKWoZL1AwMY",
  authDomain: "netflixgpt-dae70.firebaseapp.com",
  projectId: "netflixgpt-dae70",
  storageBucket: "netflixgpt-dae70.appspot.com",
  messagingSenderId: "37232611058",
  appId: "1:37232611058:web:5e3554ee61c0ae363e4a6b",
  measurementId: "G-H3751BWJ6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
