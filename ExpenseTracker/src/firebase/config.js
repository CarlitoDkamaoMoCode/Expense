// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm96m2Sw5J3-qlDRLry4U5KnLNZkPXui4",
  authDomain: "carlsimporios-167ef.firebaseapp.com",
  projectId: "carlsimporios-167ef",
  storageBucket: "carlsimporios-167ef.appspot.com",
  messagingSenderId: "244267384236",
  appId: "1:244267384236:web:850649436900f15123ce09"
};

// Initialize Firebase

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;