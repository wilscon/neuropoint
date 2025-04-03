import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTime } from "../lib/reads"; // Import the function
import 'react-calendar/dist/Calendar.css';
import './BookStyles.css'; // Import custom styles
import { useNavigate } from 'react-router-dom';
import { updateAppointment } from '../lib/update';
import Button from  './Button'; 
import { app } from "../lib/firebase";


const EditBook = () => {
    const navigate = useNavigate();
    const { timeId } = useParams();
    const [appointment, setAppointment] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [notes, setNotes] = useState("");
    const [time, setTime] = useState("");
    const [day, setDay]= useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const fetchedDate = await getTime(timeId);
                setAppointment(fetchedDate);
            } catch (error) {
                console.error("Error fetching date:", error);
            }
        };
        fetchDate();
    }, [timeId]); // Add timeId to dependency array

    // Log when `date` updates
    useEffect(() => {
        if (appointment) {
            setFirstName(appointment["firstName"]);
            setLastName(appointment["lastName"]);
            setEmail(appointment["email"]);
            setPhoneNumber(appointment["phoneNumber"]);
            setAddress(appointment["address"]);
            setCity(appointment["city"]);
            setState(appointment["state"]);
            setZipCode(appointment["zipCode"]);
            setNotes(appointment["notes"]);
            setTime(appointment["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true}).replace(/^0/, ''));
            setDay(appointment["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"}));
        }
    }, [appointment]); // Runs when date updates

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(await updateAppointment(timeId, address, true, city, email, firstName, lastName, notes, state, zipCode, phoneNumber)){
            
            document.getElementById("book").style.display = "none";
            document.getElementById("success").style.display = "";
        }
      };

      const edit = async (id) => {
        document.getElementById("success").style.display = "none";
        document.getElementById("book").style.display = "";
            
      }
    

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-100 px-4 sm:px-6 pt-20">
            <div id="book" className="w-full max-w-4xl min-h-[600px] p-8 mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
                Edit Appointment
            </h1>
            {appointment ? (
                <div >
                <p className=" text-center text-2xl font-bold text-gray-800 mb-4">
                    {day} {time}
                </p>
                <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label className="book-appt-label">First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label className="book-appt-label">Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
               
                <div className="form-group">
                    <label className="book-appt-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label className="book-appt-label">Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className="form-group">
              <label className="book-appt-label">Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label className="book-appt-label">City:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label className="book-appt-label">State:</label>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label className="book-appt-label">Zip Code:</label>
              <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label className="book-appt-label">Notes:</label>
              <textarea 
                className="large-textArea" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                rows={4} 
              />
            </div>
                <button type="submit" className="submit-button">Update</button>
                </form>
                <button className="close-button mb-4" onClick={() => navigate('/schedule')}>Cancel</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}  
            </div>
            {appointment ? (
                 <div id ="success" style={{display: "none"}}>
                 <p className="text-2xl text-gray-800 mb-4">You've successfully updated your appointment for: </p>
                 <p className="text-2xl text-center font-bold text-gray-800 mb-4"> {appointment["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"})} at {time}</p>
                 <p className="text-2xl text-gray-800 mb-4">Here are the details of your appointment: </p>
                 <ul className="grid grid-cols-1 text-lg text-gray-800 mt-4 gap-y-2 max-w-3xl mx-auto">
                    <li className="grid grid-cols-[150px_1fr] gap-x-4">
                        <span className="font-semibold">Name:</span>
                        <strong>{firstName} {lastName}</strong>
                    </li>

                    <li className="grid grid-cols-[150px_1fr] gap-x-4 min-w-0">
                        <span className="font-semibold">Email:</span>
                        <strong className="break-all">{email}</strong>
                    </li>

                    <li className="grid grid-cols-[150px_1fr] gap-x-4">
                        <span className="font-semibold">Phone Number:</span>
                        <strong>{phoneNumber}</strong>
                    </li>

                    <li className="grid grid-cols-[150px_1fr] gap-x-4">
                        <span className="font-semibold">Address:</span>
                        <strong>{address}, {city}, {state}, {zipCode}</strong>
                    </li>


                    {notes && (
                        <li className="grid grid-cols-[150px_1fr] gap-x-4">
                        <span className="font-semibold">Notes:</span>
                        <strong>{notes}</strong>
                        </li>
                    )}
                </ul>
                 <p className="text-2xl text-center text-gray-800 mt-4">If this info looks incorrect tap edit:</p>
                 <div className="text-center">
                 <button
                    onClick={() => edit(timeId)}
                    className="px-6 py-2 mt-4 bg-customTeal text-white font-semibold rounded-lg shadow-md 
                        hover:bg-white hover:text-customTeal border-2 border-customTeal 
                        transition duration-300 cursor-pointer"
                    >
                    Edit
                </button>
                 </div>
                 
                 {/*<div className="flex justify-evenly w-full max-w-sm mx-auto mt-4 mb-4">*
                    <Button text="Home" page="/" />
                    <Button text="Schedule" page="/schedule" />
                </div>*/}
                {/*<p className="text-2xl text-center text-gray-800 mb-4 mt-4 max-w-3xl mx-auto">If you have any questions regarding your appointment, please reach out to Zack at the following:</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
                    <p className="text-lg text-gray-800">
                        📞 <a href="tel:3608536808" className="hover:underline"><strong>360-853-6808</strong></a>
                    </p>
                    <p className="text-lg text-gray-800">
                        ✉️ <a href="mailto:bowman.dpt@gmail.com" className="hover:underline"><strong>bowman.dpt@gmail.com</strong></a>
                    </p>
                </div>*/}
                </div>
            ): <p></p>}
           
        </div>
    );
};

export default EditBook;