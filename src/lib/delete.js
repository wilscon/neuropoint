import { db } from './firebase';
import {doc, deleteDoc} from 'firebase/firestore';

export const deleteTimeDB = async (id) => {

    alert("inside Delete Time");
    await deleteDoc(doc(db, "availability", id));


}