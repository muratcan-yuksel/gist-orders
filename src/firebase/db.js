import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyZI_2InnA6XmrYvyOYOhu2RsgnJO2gp4",
  authDomain: "gist-orders.firebaseapp.com",
  projectId: "gist-orders",
  storageBucket: "gist-orders.appspot.com",
  messagingSenderId: "1008409755517",
  appId: "1:1008409755517:web:43ba76c8c8a2e4b46b1614",
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
