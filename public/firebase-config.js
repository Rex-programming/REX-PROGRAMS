
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1x3zUWBY2063fsq4WisnAKE8bwp1VpJM",
    authDomain: "prime-4b1dc.firebaseapp.com",
    projectId: "prime-4b1dc",
    storageBucket: "prime-4b1dc.firebasestorage.app",
    messagingSenderId: "129684949517",
    appId: "1:129684949517:web:f0ee7dfaf438a27a66a344"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);