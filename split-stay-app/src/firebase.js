import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCTvsp3tjU76jg2UijC-NGQRtEUA4HewY",
  authDomain: "split-stay-5f43e.firebaseapp.com",
  projectId: "split-stay-5f43e",
  storageBucket: "split-stay-5f43e.appspot.com",
  messagingSenderId: "1010129697358",
  appId: "1:1010129697358:web:15c9a47ab67c636157a11f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
