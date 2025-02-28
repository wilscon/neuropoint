import { collection, addDoc} from 'firebase/firestore';
import { db } from './firebase';


export const addAvailability = async (date) => {

    await addDoc(collection(db, "availability"), {
        address: "",
        booked: false,
        city: "",
        email: "",
        firstName: "",
        lastName: "",
        notes: "",
        state: "",
        time: date,
        zipCode: "",
      });
}