// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// import {getAuth, GoogleAuthProvider} from "firebase/auth" 
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBan5FpaEC8cip6O-s8fNGA8rFBSI7wVtY",
  authDomain: "myshopfb-1acaa.firebaseapp.com",
  projectId: "myshopfb-1acaa",
  storageBucket: "myshopfb-1acaa.appspot.com",
  messagingSenderId: "335655281854",
  appId: "1:335655281854:web:340032c458be8145f62aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage= getStorage(app);
// export const auth= getAuth(app);
// export const googleProvider= new GoogleAuthProvider();
