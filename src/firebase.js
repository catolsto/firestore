import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBhydoIc-ap8TZgTic0gm4DhiwokagjZR8",
    authDomain: "firestore-1eee8.firebaseapp.com",
    projectId: "firestore-1eee8",
    storageBucket: "firestore-1eee8.appspot.com",
    messagingSenderId: "209663360778",
    appId: "1:209663360778:web:e02b3769e3329921adc4f3"
  };
  
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const auth = firebase.auth()
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp


export {db, auth, marcaTiempo, firebase}