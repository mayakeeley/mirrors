import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwi5HGf9p-suSQHpvbbK2ifLyaBOodiMs",
  authDomain: "mirrors-35f7d.firebaseapp.com",
  databaseURL: "https://mirrors-35f7d.firebaseio.com",
  projectId: "mirrors-35f7d",
  storageBucket: "mirrors-35f7d.appspot.com",
  messagingSenderId: "402767876440",
  appId: "1:402767876440:web:25f25396f758a779a7952d",
  measurementId: "G-WFX1TG76ML"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
