import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDuffyUsOumay9Dos7bK6A1PdXJjpfqZhA",
    authDomain: "site-maternidade-web.firebaseapp.com",
    projectId: "site-maternidade-web",
    storageBucket: "site-maternidade-web.firebasestorage.app",
    messagingSenderId: "360365453309",
    appId: "1:360365453309:web:83030ea13ff5cb9ce53394",
    measurementId: "G-MLMLRHGS2L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);