import { collection, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";
import {sendEmail} from "./sendEmail";

export const updateBookingStatus = async (id, address,booked, city,email, firstName, lastName,notes, state, zipCode) => {
    try {
        const docRef = doc(db, "availability", id); // Get document reference
    
        await updateDoc(docRef, {
            address: address,
            booked: booked, 
            city: city,
            email: email,
            firstName: firstName,
            lastName: lastName,
            notes: notes,
            zipCode: zipCode,
        });
    
        await sendEmail(firstName, lastName, email, address, city, state, zipCode, notes);
      
    } catch (error) {
        console.error('Error updating document:", error');
      }
};


