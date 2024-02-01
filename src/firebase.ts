


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCufE7Vck3qF6rGbBEilBVsBwwYOIvsmqs",
  authDomain: "ellen-tang-coaching.firebaseapp.com",
  projectId: "ellen-tang-coaching",
  storageBucket: "ellen-tang-coaching.appspot.com",
  messagingSenderId: "820521381752",
  appId: "1:820521381752:web:5978faa7a2aaa1a1a3228d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
// export const database = getDatabase(app);
export const auth = getAuth(app);


