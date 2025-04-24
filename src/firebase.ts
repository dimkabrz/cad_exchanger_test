import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    authDomain: "cadex-test-a8ac5.firebaseapp.com",
    projectId: "cadex-test-a8ac5",
    storageBucket: "cadex-test-a8ac5.appspot.com",
    messagingSenderId: "464994827200",
    appId: "1:464994827200:web:c3c8cc27dfce1ab65b2625"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);