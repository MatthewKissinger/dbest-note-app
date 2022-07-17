import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBfU62g86xcWQBwjBD8JSxvQ6U24Z5fWHg",
    authDomain: "dbest-note-app-ef153.firebaseapp.com",
    projectId: "dbest-note-app-ef153",
    storageBucket: "dbest-note-app-ef153.appspot.com",
    messagingSenderId: "612873924336",
    appId: "1:612873924336:web:b5aae0a29b9c459d561c35"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);