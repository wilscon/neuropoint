import { collection, getDocs, doc, getDoc, query } from 'firebase/firestore';
import { db } from './firebase';

export const userIsAdmin = async (uid) => {
    return (await getDoc(doc(db, 'admins', uid))).exists();
} 