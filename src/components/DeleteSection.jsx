'use client';
import { useEffect, useState } from "react";
import React from "react";
import { getTime } from "../lib/reads"; // Import the function
import { useNavigate, useParams } from "react-router-dom";
import { deleteAppointment } from "../lib/delete";
import { sendDeleteEmail } from "../lib/sendEmail";

export const Delete = () => {
    const { timeId } = useParams();
     const [appointment, setAppointment] = useState(null);
     const navigate = useNavigate();

     useEffect(() => {
            const fetchDate = async () => {
                try {
                    console.log("Fetching data for ID:", timeId);
                    console.log("inside fetchDate");
                    const fetchedDate = await getTime(timeId);
                    setAppointment(fetchedDate);
                    const day = fetchedDate["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"});
                    const time = fetchedDate["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true});
                    const location = fetchedDate['address'] + " " + fetchedDate['city'] + ", " + fetchedDate['state'] + ", " + fetchedDate['zipCode']; 
                    const firstName = fetchedDate['firstName'];
                    const lastName = fetchedDate['lastName'];
                    const email = fetchedDate['email'];
                    const notes = fetchedDate['notes'];
                    sendDeleteEmail(day, time, location, firstName, lastName, email, notes);
                    deleteAppointment(timeId);
                    
                    
                } catch (error) {
                    console.error("Error fetching date:", error);
                }
            };
            fetchDate();
        }, [timeId]); // Add timeId to dependency array
    

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 px-4 sm:px-6 pt-20 mb-4">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Appointment Canceled</h1>
            {appointment ? 
            (
                <div>
                    <p>Your appointment on </p>
                    <p className="text-2xl text-center font-bold text-gray-800 mb-4"> {appointment["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"})} at {appointment["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true})}</p>
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
