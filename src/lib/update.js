import { collection, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import {sendEmail, sendEmailToUser} from "./sendEmail";

export const updateBookingStatus = async (id, address,booked, city,email, firstName, lastName,notes, state, zipCode, day,time) => {
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
    
        await sendEmailToUser(firstName, lastName, email, address, city, state, zipCode, notes, id, day, time);
        //await sendEmail(firstName, lastName, email, address, city, state, zipCode, notes);
        
        return true;
      
    } catch (error) {
        console.error('Error updating document:", error');
        return false;
    }
};


