


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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
  
 