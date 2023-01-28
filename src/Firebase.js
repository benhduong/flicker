// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWBgsMQuOJRGUL1ynS3yqHeRhJeLsocMI",
  authDomain: "campfire-97a09.firebaseapp.com",
  projectId: "campfire-97a09",
  storageBucket: "campfire-97a09.appspot.com",
  messagingSenderId: "974116482747",
  appId: "1:974116482747:web:94fe0056c9f42fe97b839e",
  measurementId: "G-SW3KZLST20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
