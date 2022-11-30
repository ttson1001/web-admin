
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUQWqkmenDDnK-k29ckZEd0GnafuF642c",
  authDomain: "elderly-sitter.firebaseapp.com",
  projectId: "elderly-sitter",
  storageBucket: "elderly-sitter.appspot.com",
  messagingSenderId: "945850653615",
  appId: "1:945850653615:web:1bdeb9f376579b8e93ed5a",
  measurementId: "G-3DHKS6HVRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = getStorage(app);


