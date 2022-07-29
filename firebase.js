// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR54_sdSKeQ7wczg4codfol4oTM6xcbIY",
  authDomain: "reavaliacao1.firebaseapp.com",
  projectId: "reavaliacao1",
  storageBucket: "reavaliacao1.appspot.com",
  messagingSenderId: "219474612041",
  appId: "1:219474612041:web:32363f0bed69f95fa9d498"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };