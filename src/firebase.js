// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


export const firebaseConfig = {
      apiKey: "AIzaSyB27GmrrrQfcTGP9O5FkISmsVEaiV2ZNSA",
  authDomain: "examname-ef6f7.firebaseapp.com",
  projectId: "examname-ef6f7",
  storageBucket: "examname-ef6f7.appspot.com",
  messagingSenderId: "927535473819",
  appId: "1:927535473819:web:ee3a354e16e1d6b7a0523e",
  measurementId: "G-9NFC96HTW8"
      };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };