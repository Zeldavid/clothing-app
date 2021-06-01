import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1DCkEaBZVd1uALl74_5kr5hesg7K8FIk",
  authDomain: "crown-db-90c9a.firebaseapp.com",
  projectId: "crown-db-90c9a",
  storageBucket: "crown-db-90c9a.appspot.com",
  messagingSenderId: "175610019987",
  appId: "1:175610019987:web:118b9b76a9187c54420d66",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
