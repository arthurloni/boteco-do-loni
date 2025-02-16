import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR75Qtpdk1O_tP673RH3Yc718l9i4wiCI",
    authDomain: "boteco-loni.firebaseapp.com",
    projectId: "boteco-loni",
    storageBucket: "boteco-loni.appspot.com",
    messagingSenderId: "1008295567570",
    appId: "1:1008295567570:web:f399eb3913a1832cf18d0b",
    measurementId: "G-0671TCF9NY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firestore conectado:", db);

export { db };
