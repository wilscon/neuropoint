import { collection, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";

export const updateBookingStatus = async (address,booked, city,email, firstName, lastName,notes, zipCode) => {

    alert("inside updateBookingStatus");

    try {
        const docRef = doc(db, "availability", "qvkeXoGbE4UmqAF4nFje"); // Get document reference
    
        await updateDoc(docRef, {
            address: address,
            booked: booked, // Update only the "booking" field
            city: city,
            email: email,
            firstName: firstName,
            lastName: lastName,
            notes: notes,
            zipCode: zipCode,
        });
    
        console.log(`✅ Successfully updated "booking" to ${true} in document qvkeXoGbE4UmqAF4nFje`);
      } catch (error) {
        console.error("❌ Error updating document:", error);
      }
};


