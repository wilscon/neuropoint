import { collection, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";

export const updateBookingStatus = async () => {

    alert("inside updateBookingStatus");

    try {
        const docRef = doc(db, "availability", "qvkeXoGbE4UmqAF4nFje"); // Get document reference
    
        await updateDoc(docRef, {
          booked: true // Update only the "booking" field
        });
    
        console.log(`✅ Successfully updated "booking" to ${true} in document qvkeXoGbE4UmqAF4nFje`);
      } catch (error) {
        console.error("❌ Error updating document:", error);
      }
};


