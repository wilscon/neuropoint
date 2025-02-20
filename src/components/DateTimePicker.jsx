import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({ selectedDate, setSelectedDate, setTime }) => {
  return (
    <div>
      {/* Date Picker */}
      <div className="date-picker-container">
        <h1>Date:</h1>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="datepicker"
          placeholderText="mm/dd/yyyy"
        />
      </div>

      {/* Time Picker */}
      <div className="time-input-container">
        <h1 className="mt-10">Time:</h1>
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          className="timepicker"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;