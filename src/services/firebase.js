import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1pGr7Kv3vpwQ0yBudOhGYpLi-hwH_rNk",
    authDomain: "pcgamingstore-5d6fe.firebaseapp.com",
    projectId: "pcgamingstore-5d6fe",
    storageBucket: "pcgamingstore-5d6fe.appspot.com",
    messagingSenderId: "376800583009",
    appId: "1:376800583009:web:46a0796898063f14ea3920"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);