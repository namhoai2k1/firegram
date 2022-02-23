// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyALe1KMoESF3WbFIkDXKXBGUOOakG2msy0",
    authDomain: "flnam-imgapp.firebaseapp.com",
    projectId: "flnam-imgapp",
    storageBucket: "flnam-imgapp.appspot.com",
    messagingSenderId: "1047667908312",
    appId: "1:1047667908312:web:a1c7d89a2353b6eaf801ad"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
