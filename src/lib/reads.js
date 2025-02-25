import { collection, getDocs, doc, getDoc, query, where, QuerySnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Timestamp } from "firebase/firestore";

export const userIsAdmin = async (uid) => {
    return (await getDoc(doc(db, 'admins', uid))).exists();
} 

const availabilityRef = collection(db, "availability");

export const getAvailableDays = async(user)=> {

    const availabilityRef = collection(db, "availability");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        const querySnapshot = await getDocs(availabilityRef); 
        const days = querySnapshot.docs
        .filter(doc => {
            const date = doc.data().time.toDate(); 
            return date >= today;
          })
        .filter(doc => user || !doc.data().booked)
        .map(doc => {
          const date = doc.data().time.toDate(); 
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0"); 
          const day = String(date.getDate()).padStart(2, "0"); 
    
          return `${year}-${month}-${day}`; 
        });

        const uniqueDays = [...new Set(days)];
        console.log("Formatted Times:", uniqueDays);
        return uniqueDays;
      } catch (error) {
        console.error("❌ Error fetching times:", error);
        return [];
      }
}


export const getAvailableTimes = async (date, user) => {
    
    const startOfDay = Timestamp.fromDate(new Date(date.setHours(0, 0, 0, 0))); // 00:00:00
    const endOfDay = Timestamp.fromDate(new Date(date.setHours(23, 59, 59, 999))); // 23:59:59
    
    
    const availabilityRef = collection(db, "availability");

    const queryDate = new Date(date);
    queryDate.setHours(12,0,0,0).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }); // set time to noon;
   
    
    const q = query(availabilityRef, where("time", ">=", startOfDay), where("time", "<=", endOfDay));
    const snapshot = await getDocs(q);

    console.log("user inside getAvailableTimes: " + user);
    const times = user ? 
    snapshot.docs
    .map(doc => ({
      id: doc.id, // 🔥 Include documentId
      time: doc.data().time.toDate(), // Convert Firestore Timestamp to Date
      booked: doc.data().booked,
    }))
    .sort((a, b) => a.time.getTime() - b.time.getTime()) // Sort chronologically
    .map(({ id, time, booked }) => ({
      id, // 🔥 Preserve documentId
      time: time.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: true 
      }).replace(/^0/, ''),
      booked,
    }))
    : snapshot.docs
    .filter(doc => !doc.data().booked) // 🔥 Only include unbooked times
    .map(doc => ({
      id: doc.id, // 🔥 Include documentId
      time: doc.data().time.toDate(), // Convert Firestore Timestamp to Date
      booked: doc.data().booked,
    }))
    .sort((a, b) => a.time.getTime() - b.time.getTime()) // Sort chronologically
    .map(({ id, time, booked }) => ({
      id, // 🔥 Preserve documentId
      time: time.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: true 
      }).replace(/^0/, ''),// Format and remove leading zero
      booked,
    }));


  console.log(times); // ✅ Returns an array of objects with { id, time }
  return times;
};

export const getTime = async(id) => {

    const querySnapshot = await getDocs(collection(db, "availability"));
    
    let availabilityObj = {};
        querySnapshot.forEach((doc) => {
            Object.entries(doc.data()).forEach(([key, value]) => {
              availabilityObj[key] = value; // Store each field as a key-value pair
            });
          });

        console.log("GetTime data: " + availabilityObj);
    
        return availabilityObj;

};