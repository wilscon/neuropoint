import { db } from './firebase';
import {doc, deleteDoc} from 'firebase/firestore';

export const deleteAppointment = async (id) => {

    await deleteDoc(doc(db, "appointments", id));


}