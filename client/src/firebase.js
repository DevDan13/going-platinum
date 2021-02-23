import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require("dotenv");

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "spotify-playlist-generat-dd85d.firebaseapp.com",
  projectId: "spotify-playlist-generat-dd85d",
  storageBucket: "spotify-playlist-generat-dd85d.appspot.com",
  messagingSenderId: "995562264719",
  appId: "1:995562264719:web:85d7f2b658eea3ba32b8fa",
  measurementId: "G-XBVJP1LBJY",
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
