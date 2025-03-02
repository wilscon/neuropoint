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

    const times = snapshot.docs
    .filter(doc => user || !doc.data().booked)
    .map(doc => ({
      id: doc.id, 
      time: doc.data().time.toDate(), 
      booked: doc.data().booked,
    }))
    .sort((a, b) => a.time.getTime() - b.time.getTime()) 
    .map(({ id, time, booked }) => ({
      id, 
      time: time.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit", 
        hour12: true 
      }).replace(/^0/, ''),
      booked,
    }));


  console.log(times); 
  return times;
};

export const getTime = async(id) => {

    if (!id) {
        console.error("Error: Missing document ID");
        return null;
    }
    try {
        const docRef = doc(db, "availability", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Fetched Data:", docSnap.data());
            return docSnap.data(); // Returns the document data as an object
        } else {
            console.error("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        return null;
    }
};