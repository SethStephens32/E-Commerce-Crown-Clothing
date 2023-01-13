// initializes firebase app
import {initializeApp} from 'firebase/app';

// getting firebase auth and sign in methods
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// getting firebase firestore
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9bYMsaBZ-unv_CsCVJmQN8iMvKymuSs",
  authDomain: "e-commerce-crown-clothing.firebaseapp.com",
  projectId: "e-commerce-crown-clothing",
  storageBucket: "e-commerce-crown-clothing.appspot.com",
  messagingSenderId: "1074630721179",
  appId: "1:1074630721179:web:6f4528709a85558bf4d03e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// getting provider
const provider = new GoogleAuthProvider();
// setting prompt to select account
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserProfileDocumentFromAuth = async (userAuth) => {
    // uid is the unique id of the user in the database shown in the console
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)
    const userDocSnapshot = await getDoc(userDocRef);
    console.log(userDocSnapshot.exists())
}




