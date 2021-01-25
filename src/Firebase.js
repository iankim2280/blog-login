import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCja_UGhg3q26di66JR8TQxIDb9g7xzDvY",
  authDomain: "login-cf0dd.firebaseapp.com",
  projectId: "login-cf0dd",
  storageBucket: "login-cf0dd.appspot.com",
  messagingSenderId: "370887755586",
  appId: "1:370887755586:web:07e48be411e28cefae2adb",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
