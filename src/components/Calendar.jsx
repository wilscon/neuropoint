'use client';
import React, { useState } from 'react';
import { getAvailableTimes} from "../lib/reads";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom styles

const CalendarSection = () => {
  
  const defaultAvailableTimes = [];
  const availableDates = ["2025-02-15", "2025-02-19"];
  const today = new Date();
  const initialDate = today;
  const initialSelectedDate = today;

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [date, setDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);
  const [selectedTime, setSelectedTime] = useState(null); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [notes, setNotes] = useState("");

  const handleDateClick = async (clickedDate) => {
    setDate(clickedDate);
    setSelectedDate(clickedDate);
    const times = await getAvailableTimes(clickedDate);
    setAvailableTimes(times); 
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate);
  };

  const getTileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const formatDate = new Date(selectedDate);

    const year = formatDate.getFullYear();
    const month = String(formatDate.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
    const day = String(formatDate.getDate()).padStart(2, "0"); // Ensure 2-digit day

    const formattedSelectedDate = `${year}-${month}-${day}`;

    if (formattedDate == formattedSelectedDate) 
      return "selected-day";
    
    if (!availableDates.includes(formattedDate))
       return "unavailable-day"; 

    return "available-day"; 
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setNotes("");
  };

  const closeModal = () => {
    setSelectedTime(null);
  };

  const handleSubmit = (e) => {
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
      selectedTime,
      selectedDate: selectedDate.toLocaleDateString("en-US"),
    });

    alert("Appointment successfully booked!");

    closeModal();
  };

  
  const isTileDisabled = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    return !availableDates.includes(formattedDate); 
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={date}
        onChange={setDate}
        minDate={new Date()} // Disable past dates
        defaultActiveStartDate={new Date()} // Load with the current month
        onClickDay={handleDateClick}
        onActiveStartDateChange={handleActiveStartDateChange} // Detect month changes
        tileClassName={getTileClassName} // Apply custom styles
        tileDisabled={isTileDisabled} // Disable unselectable dates
      />
      <p className="selected-date-text">
        <strong>{new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
      </p>
      
        <div className="availability-container">
          <h2 className="availability-title">Availability:</h2>
          <ul className="availability-list">
            {availableTimes.length > 0 ? (
              availableTimes.map((time, index) => (
                <li key={index}>
                   <button className="time-slot-button" onClick={() => handleTimeSlotClick(time)}>
                    {time}
                  </button>
                </li>
              ))
            ) : (
              <p className="no-availability-text">No available times for this date.</p>
            )}
          </ul>
        </div>
         {selectedTime && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Appointment</h2>
            <strong>{`${new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at ${selectedTime}`}</strong>
            
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label>First Name:</label>
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Last Name:</label>
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input 
                  type="text" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>City:</label>
                <input 
                  type="text" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>State:</label>
                <input 
                  type="text" 
                  value={state} 
                  onChange={(e) => setState(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Zip Code:</label>
                <input 
                  type="text" 
                  value={zipCode} 
                  onChange={(e) => setZipCode(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Notes:</label>
                <textarea 
                  type="text" 
                  className="large-textArea"
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)} 
                  rows={4}
                />
              </div>
              <button type="submit" className="submit-button">Confirm</button>
            </form>
          <button className="close-button" onClick={closeModal}>Close</button>
        </div>
      </div>
      )}
  
    </div>
  );
};

export default CalendarSection;