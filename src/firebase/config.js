import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBMAbzXmm8wq3OK6FM64mP-6kP1OvFXTXY",
  authDomain: "firestore-f248f.firebaseapp.com",
  projectId: "firestore-f248f",
  storageBucket: "firestore-f248f.appspot.com",
  messagingSenderId: "848453442780",
  appId: "1:848453442780:web:60f7e747235e76b9b5e819"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };