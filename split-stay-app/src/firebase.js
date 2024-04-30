import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFczJeAZloKLBmj7R0_GbUp6KmGWhmtqM",
  authDomain: "split-stay-1.firebaseapp.com",
  projectId: "split-stay-1",
  storageBucket: "split-stay-1.appspot.com",
  messagingSenderId: "830532803848",
  appId: "1:830532803848:web:b711ddadaebf215abee0bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
