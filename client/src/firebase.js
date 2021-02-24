import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require("dotenv");

const provider = new firebase.auth.GoogleAuthProvider();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUQYq8cu_K8zT5RhZfcjIbVNuXSq6sWSo",
  authDomain: "going-platinum-465e2.firebaseapp.com",
  projectId: "going-platinum-465e2",
  storageBucket: "going-platinum-465e2.appspot.com",
  messagingSenderId: "230217417240",
  appId: "1:230217417240:web:42df27f7b1d0ca0f5e396d",
  measurementId: "G-MDX89KQ0VG"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
