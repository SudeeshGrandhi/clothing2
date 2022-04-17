import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARhfoZ8kzOYby3HFg23bBPIk14Lz_yHCU",
  authDomain: "crwn-clothing2-db.firebaseapp.com",
  projectId: "crwn-clothing2-db",
  storageBucket: "crwn-clothing2-db.appspot.com",
  messagingSenderId: "35348890420",
  appId: "1:35348890420:web:758001ee24fbfaee885b61",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

const database = getFirestore();

export const createUserDocumentFromAuth = async (user) => {
  console.log(user);
  //checking the document
  const userDocRef = doc(database, "users", user.uid);

  //from document getting/checking data exists or not
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if data doesnt exists we can set data using setData

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
};
