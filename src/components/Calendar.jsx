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
    const formattedSelectedDate = selectedDate.toISOString().split("T")[0];

    if (formattedDate === formattedSelectedDate) return "selected-day";
    if (!availableDates.includes(formattedDate)) return "unavailable-day"; 

    return "available-day"; 
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
                  <button className="time-slot-button" onClick={() => alert(`You selected ${time}`)}>
                    {time}
                  </button>
                </li>
              ))
            ) : (
              <p className="no-availability-text">No available times for this date.</p>
            )}
          </ul>
        </div>
  
    </div>
  );
};

export default CalendarSection;