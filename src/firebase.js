// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "Firebase/auth";
import { collection, doc, getFirestore } from "Firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZID35aQcbVhVTdr8NL5MASDVdmuNT4M8",
  authDomain: "kinder-b67d0.firebaseapp.com",
  projectId: "kinder-b67d0",
  storageBucket: "kinder-b67d0.appspot.com",
  messagingSenderId: "294984637601",
  appId: "1:294984637601:web:db7073127ba311ce3224e0",
  measurementId: "G-ZN0W86JRZR"
};
// Initialize our Firebase for our application
let app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const userDoc = (userId) => doc(db, "users", userId)
export {
    auth,
}