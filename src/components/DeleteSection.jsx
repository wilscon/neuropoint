'use client';
import { useEffect, useState } from "react";
import React from "react";
import { getTime } from "../lib/reads"; // Import the function
import { useNavigate, useParams } from "react-router-dom";
import { deleteAppointment } from "../lib/delete";
import { updateAppointment } from "../lib/update";
import { sendDeleteEmail } from "../lib/sendEmail";

export const Delete = () => {
    const { timeId } = useParams();
     const [appointment, setAppointment] = useState(null);
     const [day,setDay] = useState("");
     const [time, setTime] = useState("");
     const [location, setLocation] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [notes, setNotes] = useState("");
     const navigate = useNavigate();

     useEffect(() => {
            const fetchDate = async () => {
                try {
                    console.log("Fetching data for ID:", timeId);
                    console.log("inside fetchDate");
                    const fetchedDate = await getTime(timeId);
                    setAppointment(fetchedDate);
                    setDay(fetchedDate["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"}));
                    setTime(fetchedDate["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true}).replace(/^0/, ''));
                    setLocation(fetchedDate['address'] + " " + fetchedDate['city'] + ", " + fetchedDate['state'] + ", " + fetchedDate['zipCode']); 
                    setFirstName(fetchedDate['firstName']);
                    setLastName(fetchedDate['lastName']);
                    setEmail(fetchedDate['email']);
                    setNotes(fetchedDate['notes']);
                   
                    //deleteAppointment(timeId);
                    updateAppointment(timeId, "", false, "", "", "", "", "", "", "", "", "")
                    
                } catch (error) {
                    console.error("Error fetching date:", error);
                }
            };
            fetchDate();
        }, [timeId]); 
    
        useEffect(() => {
            if(day && time && location && firstName && lastName && email)
                sendDeleteEmail(day, time, location, firstName, lastName, email, notes);
        }, [day,time,location,firstName,lastName,email]);

        
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 px-4 sm:px-6 pt-20 mb-4">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Appointment Canceled</h1>
            {appointment ? 
            (
                <div>
                    <p>Your appointment on </p>
                    <p className="text-2xl text-center font-bold text-gray-800 mb-4"> {day} at {time}</p>
                    <p> has been canceled</p>
                    <p>Tap schedule to schedule a new appointment</p>
                    <button
                    onClick={() => navigate('/schedule')}
                    className="px-6 py-2 mt-4 bg-customTeal text-white font-semibold rounded-lg shadow-md 
                        hover:bg-white hover:text-customTeal border-2 border-customTeal 
                        transition duration-300 cursor-pointer"
                    >
                    Schedule
                </button>
                </div>    
                
            
            ) 
                : (<p>Date and Time</p>)}
        </div>
    );
};

export default Delete;
