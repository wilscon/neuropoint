import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvWG0eE8rs-PHVyuoSRyuzPrObuqoROmo",
  authDomain: "neuro-point.firebaseapp.com",
  projectId: "neuro-point",
  storageBucket: "neuro-point.firebasestorage.app",
  messagingSenderId: "60925318637",
  appId: "1:60925318637:web:1c841c34dc56064346c3e4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const allowedEmails = ["connor.wilson48@gmail.com","bowman.dpt@gmail.com" ]; // Whitelist of allowed emails

export const signInWithGoogle = async () => {

    try{
       const result = await signInWithPopup(auth, new GoogleAuthProvider());
       const user = result.user;

       if (allowedEmails.includes(user.email)) {
        console.log("Sign-in successful:", user);
        window.alert(`Signed in with ${user.email}`);
        } else {
        console.error("Access denied: User is not allowed.");
        auth.signOut();
        alert("You are not authorized to access this application.");
        }
       
       
    } catch(e){
        window.alert(e.message);
    }
};

export const signOutFromGoogle = async () => {
    try{
        await signOut(auth);

        window.alert('Signed out!');
    }catch(e){
        window.alert(e.message);
    }
};