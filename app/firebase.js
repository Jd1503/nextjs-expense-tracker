// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNB877Pu0O-a2U6sKmhIoGuNsiz_B_MxA",
  authDomain: "expense-tracker-13f8a.firebaseapp.com",
  projectId: "expense-tracker-13f8a",
  storageBucket: "expense-tracker-13f8a.appspot.com",
  messagingSenderId: "510570634688",
  appId: "1:510570634688:web:c9f543305ce08126d73c25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
