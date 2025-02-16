'use client';
import React, { useState } from 'react';
import { getAvailableTimes} from "../lib/reads";
import Modal from './Modal';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom styles
import { updateBookingStatus } from '../lib/update';

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
      selectedTime,
      selectedDate: selectedDate.toLocaleDateString("en-US"),
    });

    alert("Appointment successfully booked!");

    await updateBookingStatus(address, true, city, email, firstName, lastName, notes, state, zipCode);

    const times = await getAvailableTimes(selectedDate);
    setAvailableTimes(times); 

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
        <Modal
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        email={email} setEmail={setEmail}
        address={address} setAddress={setAddress}
        city={city} setCity={setCity}
        state={state} setState={setState}
        zipCode={zipCode} setZipCode={setZipCode}
        notes={notes} setNotes={setNotes}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CalendarSection;