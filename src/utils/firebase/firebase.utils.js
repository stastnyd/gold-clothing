import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: 'AIzaSyD2oPxuQavXYAXCxnNtdNvCsHGK8T3t3Cs',
    authDomain: 'gold-clothing.firebaseapp.com',
    projectId: 'gold-clothing',
    storageBucket: 'gold-clothing.appspot.com',
    messagingSenderId: '179223628275',
    appId: '1:179223628275:web:cc3e25e213b36b83986a86',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentWithAuth = async (userAuth) => {
   const docRef = doc(db, 'users', userAuth.uid)
   const userSnapshot = await getDoc(docRef)

   if (!userSnapshot.exists()){
     const {displayName, email} = userAuth
     const createdAt = new Date()

     try {
        await setDoc(docRef, {
            displayName,
            email,
            createdAt
        })
     } catch (error) {
        console.log("Error saving user", error)
     }
   }
   return docRef
};