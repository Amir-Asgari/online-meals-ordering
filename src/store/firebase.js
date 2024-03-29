// import firebase from 'firebase/app';
// import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnATuFk0gnUXEPRp1OhP7qUQpX81bt3go",
  authDomain: "mealordering-80905.firebaseapp.com",
  projectId: "mealordering-80905",
  storageBucket: "mealordering-80905.appspot.com",
  messagingSenderId: "727267252906",
  appId: "1:727267252906:web:ab5c1395a77bf372cb8ed3",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// export default firebase;
// export const db = getFirestore(app)
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app);
const specialDay = doc(firestore, "daily");
function write() {
  const docData = {
    dec: "aaaa",
    price: 3.99,
    milk: "whole",
    vegan: false,
  };
  setDoc(specialDay, docData);
}

console.log("hello, Firestore!");
write();
