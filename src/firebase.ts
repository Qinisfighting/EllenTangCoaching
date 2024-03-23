


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

// require('dotenv').config();



// import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
//const isLoggedIn = localStorage.getItem("loggedin")

//export const user = auth.currentUser;
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
const articleRef = collection(db, "Articles")

export async function getArticles(id?: string) {

    const querySnapshot = await getDocs(articleRef)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      
    }))
    // console.log(dataArr)
    return id? dataArr.filter(item => item.id === id)[0] : dataArr
  }
  
 