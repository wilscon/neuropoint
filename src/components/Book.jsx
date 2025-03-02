import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTime } from "../lib/reads"; // Import the function
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { updateBookingStatus } from '../lib/update';

const Book = () => {
    const navigate = useNavigate();
    const { timeId } = useParams();
    const [date, setDate] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const fetchDate = async () => {
            try {
                console.log("Fetching data for ID:", timeId);
                const fetchedDate = await getTime(timeId);
                setDate(fetchedDate);
            } catch (error) {
                console.error("Error fetching date:", error);
            }
        };
        fetchDate();
    }, [timeId]); // Add timeId to dependency array

    // Log when `date` updates
    useEffect(() => {
        if (date) {
            console.log("Updated Date Object:", date);
            console.log("Booked:", date["booked"]);
            console.log("Time: ", date["time"]);
        }
    }, [date]); // Runs when date updates

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted Data:", {
          firstName,
          lastName,
          email,
          address, 
          city,
          state,
          zipCode,
          notes,
        });
    
        if(await updateBookingStatus(timeId, address, true, city, email, firstName, lastName, notes, state, zipCode)){
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setCity("");
            setState("");
            setZipCode("");
            setNotes("");
            alert("Appointment successfully booked!");
            document.getElementById("book").style.display = "none";
            document.getElementById("success").style.display = "";
        }
      };
    

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 sm:px-6 pt-20">
            <div id="book">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
                Book Appointment
            </h1>
            {date ? (
                <div>
                <p className="text-2xl font-bold text-gray-800 mb-4">
                    {date["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"})} {date["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true})}
                </p>
                <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
              <label>Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label>City:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label>State:</label>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label>Zip Code:</label>
              <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </div>
  
            <div className="form-group">
              <label>Notes:</label>
              <textarea 
                className="large-textArea" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                rows={4} 
              />
            </div>
                <button type="submit" className="submit-button">Book</button>
                </form>
                <button className="close-button" onClick={() => navigate('/schedule')}>Cancel</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}  
            </div>
            {date ? (
                 <div id ="success" style={{display: "none"}}>
                 <p className="text-2xl font-bold text-gray-800 mb-4">You've successfully booked an appointment for {date["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"})} at {date["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true})}</p>
                </div>
            ): <p></p>}
           
        </div>
    );
};

export default Book;