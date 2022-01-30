import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXU8zn5EyaZxEKaatDIOg4vk8GazLHyTc",
  authDomain: "budgettracker-igor.firebaseapp.com",
  projectId: "budgettracker-igor",
  storageBucket: "budgettracker-igor.appspot.com",
  messagingSenderId: "333042317120",
  appId: "1:333042317120:web:b3e446b6a3e6e5d664aca5",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
