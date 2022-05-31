// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAO8f09O4ef9Qg2dkvpBFOyRyfqlLusu6E",
  authDomain: "galvanic-cirrus-342211.firebaseapp.com",
  projectId: "galvanic-cirrus-342211",
  storageBucket: "galvanic-cirrus-342211.appspot.com",
  messagingSenderId: "554638307569",
  appId: "1:554638307569:web:f0724bd4adf817bef1f950"
};
//// const firebaseConfig = {
////     apiKey: "AIzaSyALe1KMoESF3WbFIkDXKXBGUOOakG2msy0",
////     authDomain: "flnam-imgapp.firebaseapp.com",
////     projectId: "flnam-imgapp",
////     storageBucket: "flnam-imgapp.appspot.com",
////     messagingSenderId: "1047667908312",
////     appId: "1:1047667908312:web:a1c7d89a2353b6eaf801ad"
////   };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAO8f09O4ef9Qg2dkvpBFOyRyfqlLusu6E",
//   authDomain: "galvanic-cirrus-342211.firebaseapp.com",
//   projectId: "galvanic-cirrus-342211",
//   storageBucket: "galvanic-cirrus-342211.appspot.com",
//   messagingSenderId: "554638307569",
//   appId: "1:554638307569:web:f0724bd4adf817bef1f950"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);