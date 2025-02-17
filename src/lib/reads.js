import { collection, getDocs, doc, getDoc, query, where, QuerySnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";

export const userIsAdmin = async (uid) => {
    return (await getDoc(doc(db, 'admins', uid))).exists();
} 

const availabilityRef = collection(db, "availability");

export const getAvailableDays = async()=> {

    const availabilityRef = collection(db, "availability");

    try {
        const querySnapshot = await getDocs(availabilityRef); // Use predefined availabilityRef
    
        const days = querySnapshot.docs.map(doc => {
          const date = doc.data().time.toDate(); // Convert Firestore Timestamp to JavaScript Date
    
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
          const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
    
          return `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"
        });

        /*const uniqueDays = days.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.day === value.day)
          );*/

          const uniqueDays = [...new Set(days)];

          
    
        console.log("Formatted Times:", uniqueDays);
        return uniqueDays;
      } catch (error) {
        console.error("❌ Error fetching times:", error);
        return [];
      }
}

export const getAvailableTimes = async (date) => {
    
    const startOfDay = Timestamp.fromDate(new Date(date.setHours(0, 0, 0, 0))); // 00:00:00
    const endOfDay = Timestamp.fromDate(new Date(date.setHours(23, 59, 59, 999))); // 23:59:59
    
    
    const availabilityRef = collection(db, "availability");

    const queryDate = new Date(date);
    queryDate.setHours(12,0,0,0).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }); // set time to noon;
   
    
    const q = query(availabilityRef, where("time", ">=", startOfDay), where("time", "<=", endOfDay));
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