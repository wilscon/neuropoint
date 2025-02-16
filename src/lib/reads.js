import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";

export const userIsAdmin = async (uid) => {
    return (await getDoc(doc(db, 'admins', uid))).exists();
} 

const availabilityRef = collection(db, "availability");

export const getAvailableTimes = async (date) => {
    
    const startOfDay = Timestamp.fromDate(new Date(date.setHours(0, 0, 0, 0))); // 00:00:00
    const endOfDay = Timestamp.fromDate(new Date(date.setHours(23, 59, 59, 999))); // 23:59:59
    
    const queryDate = new Date(date);
    queryDate.setHours(12,0,0,0).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }); // set time to noon;
   
    const availabilityRef = collection(db, "availability");
    const q = query(availabilityRef, where("day", ">=", startOfDay), where("day", "<=", endOfDay));
    const snapshot = await getDocs(q);

    const times = snapshot.docs
    .filter(doc => !doc.data().booked) // 🔥 Only include unbooked times
    .map(doc => ({
      id: doc.id, // 🔥 Include documentId
      time: doc.data().time.toDate() // Convert Firestore Timestamp to Date
    }))
    .sort((a, b) => a.time.getTime() - b.time.getTime()) // Sort chronologically
    .map(({ id, time }) => ({
      id, // 🔥 Preserve documentId
      time: time.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: true 
      }).replace(/^0/, '') // Format and remove leading zero
    }));
  
  console.log(times); // ✅ Returns an array of objects with { id, time }
  return times;
};