import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAyCQsOxZur87_b79fMalyw-xTPukZfMaA",
    authDomain: "make-991f6.firebaseapp.com",
    projectId: "make-991f6",
    storageBucket: "make-991f6.appspot.com",
    messagingSenderId: "915507524893",
    appId: "1:915507524893:web:87c0fe0576f50902baddf4",
    measurementId: "G-PQ72TW5CP5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth}