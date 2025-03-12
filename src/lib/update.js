import { collection, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import {sendEmail, sendEmailToUser} from "./sendEmail";

export const updateAppointment = async (id, address,booked, city,email, firstName, lastName,notes, state, zipCode) => {
    try {
        const docRef = doc(db, "appointments", id); // Get document reference
    
        await updateDoc(docRef, {
            address: address,
            booked: booked, 
            city: city,
            email: email,
            firstName: firstName,
            lastName: lastName,
            notes: notes,
            state: state,
            zipCode: zipCode,
        });
        
        return true;
      
    } catch (error) {
        console.error('Error updating document:", error');
        return false;
    }
};


