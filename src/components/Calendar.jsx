import React, { useState } from 'react';
import { format } from 'date-fns';

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom styles

const CalendarSection= () => {
  
  const availableTimes = {
    "2025-02-15": ["10:00 AM", "2:00 PM", "4:00 PM"],
    "2025-02-16": ["9:00 AM", "12:00 PM"],
    "2025-02-17": ["11:00 AM", "3:00 PM", "5:30 PM"],
    "2025-02-22": ["4:00 PM"],
  };

  const today = new Date();
  const initialDate = today;
  const initialSelectedDate = today;

  // State to track selected date and current calendar month
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [date, setDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  const handleDateClick = (clickedDate) => {
    setDate(clickedDate);
    setSelectedDate(clickedDate);
   
  };

  // Detect when the month changes
  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate);
  };

  // Function to apply custom classes to each day
  const getTileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const formattedSelectedDate = selectedDate.toISOString().split("T")[0];

    if (formattedDate === formattedSelectedDate) return "selected-day"; 
    if (!availableTimes[formattedDate]) return "unavailable-day"; 

    return "available-day"; // Default styling
  };

  // Disable all days except today and available dates
  const isTileDisabled = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate !== today && !availableTimes[formattedDate]; 
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">
        Calendar for {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
      </h2>
      <Calendar
        value={date}
        onChange={setDate}
        minDate={new Date()} // Disable past dates
        defaultActiveStartDate={new Date()} // Load with the current month
        onClickDay={handleDateClick}
        onActiveStartDateChange={handleActiveStartDateChange} // Detect month changes
        tileClassName={getTileClassName} // Apply custom styles
        tileDisabled={isTileDisabled} // Disable unselectable dates except today
      />
      <p className="selected-date-text">
        You selected:<strong>{new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
      </p>

      {selectedDate && (
        <div className="availability-container">
          <h2 className="availability-title">Availability:</h2>
          {availableTimes[selectedDate.toISOString().split("T")[0]]?.length > 0 ? (
            <ul className="availability-list">
              {availableTimes[selectedDate.toISOString().split("T")[0]].map((time, index) => (
                <li key={index} className="time-slot">
                  {time}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-availability-text">
              {selectedDate === today
                ? "No available times today."
                : "No available times for this date."}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarSection;
  