import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDiXhzAREYwSgJSqdbM5Bbj4fJfb5BssgQ",
  authDomain: "star-gibson.firebaseapp.com",
  projectId: "star-gibson",
  storageBucket: "star-gibson.appspot.com",
  messagingSenderId: "912408296534",
  appId: "1:912408296534:web:cf85ff6b4a803e87c24ff7"
};

const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app)

