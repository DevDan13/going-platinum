import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHGxHdgd6TNiCdMoAAUZSNxd_F0DaKWHo",
  authDomain: "going-platinum.firebaseapp.com",
  projectId: "going-platinum",
  storageBucket: "going-platinum.appspot.com",
  messagingSenderId: "569376293174",
  appId: "1:569376293174:web:bbf4612a6e114cfad1f397",
  measurementId: "G-D78RPKH61B",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
