'use client';
import React, { useState,useEffect } from 'react';
import { getAvailableDays, getAvailableTimes, getTime} from "../lib/reads";
import {addAvailability} from "../lib/create";
import {deleteAppointment} from "../lib/delete";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom styles
import { useAuth } from "../lib/useAuth";
import { useNavigate } from 'react-router-dom';
import { sendDeleteEmail } from '../lib/sendEmail';


const CalendarSection = () => {
  
  const defaultAvailableTimes = [];
  const today = new Date();
  const initialDate = today;
  const initialSelectedDate = today;
  const navigate = useNavigate();
  

  const {user,loading} = useAuth();
  const [availableDates, setAvailableDates] = useState([]); // 🔥 Dynamically set available dates
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [date, setDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);
  const [selectedDatePick, setSelectedDatePick] = useState(null);
  const [timePick, setTimePick] = useState(null);

  useEffect(() => {
    const fetchAvailableDates = async () => {
        const dates = await getAvailableDays(user);
        setAvailableDates(dates);
        const times = await getAvailableTimes(selectedDate,user);
        setAvailableTimes(times);
    };
    fetchAvailableDates();
  }, [user,loading]); 

  const handleDateClick = async (clickedDate) => {
    setDate(clickedDate);
    setSelectedDate(clickedDate);
    const times = await getAvailableTimes(clickedDate,user);
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

  const handleTimeSlotClickEdit = async (id,time) => {
    navigate(`/editbook/${id}`)
  }

  const addDate = async () => {

    setTimePick("");
    setSelectedDatePick("");
    const [hours, minutes] = timePick.split(":").map(Number);
    const newDate = new Date(selectedDatePick);
    newDate.setHours(hours, minutes, 0); // Set time to the date
    
    await addAvailability(newDate);

    const dates = await getAvailableDays(user); // Fetch from Firestore
    setAvailableDates(dates); // Set state with available dates

    const times = await getAvailableTimes(selectedDate, user);
    
    setAvailableTimes(times); 
    
  }

  const deleteTime = async (id) => {
  
    const appointment = await getTime(id);
    if(appointment["booked"] === true)
    {
      sendDeleteEmail(
        appointment["time"].toDate().toLocaleDateString("en-US",{month: "long", day: "numeric", year: "numeric"}),
        appointment["time"].toDate().toLocaleTimeString("en-US",{hour: "2-digit", minute: "2-digit", hour12: true}).replace(/^0/, ''), 
        appointment['address'] + " " + appointment['city'] + ", " + appointment['state'] + ", " + appointment['zipCode'], 
        appointment["firstName"], 
        appointment["lastName"],
        appointment["email"],
        appointment["notes"],
        appointment["phoneNumber"],
      );

    }

    deleteAppointment(id);
    const dates = await getAvailableDays(user); // Fetch from Firestore
    setAvailableDates(dates); // Set state with available dates
    const times = await getAvailableTimes(selectedDate, user);
    
    setAvailableTimes(times); 
  }

  
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
      <p className="text-2xl font-bold text-gray-800">
        {new Date(selectedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>
      <div className="availability-container">
        <h2 className="text-2xl text-gray-800 mb-4">Availability:</h2>
        <ul className="availability-list">
          {availableTimes.length > 0 ? (
            availableTimes.map(({ id, time,booked }) => (
              <li key={id} className="availability-item">
                <div className="time-slot-container">
                  <button className={booked ? "time-slot-button-booked" : "time-slot-button" } onClick={() => booked ? null : navigate(`/book/${id}`)}>
                    {time}
                    {user && booked ?
                      <span className="info-button" onClick={(e) => { e.stopPropagation(handleTimeSlotClickEdit(id, time)); }}>
                        Edit
                      </span> : ""}
                  </button>
                </div>
                {user ?
                  <button className="delete-button" onClick={() => deleteTime(id)}>
                    X
                  </button> : ""}
              </li>
            ))
          ) : (
            <p className="no-availability-text">No available times for this date.</p>
          )}
        </ul>
        {user ? <>
          <h1 className='mt-10 text-2xl text-gray-800 mb-4'>Add Availability:</h1>

          <div className="datetime-picker-container">
            {/* Date Picker on its own line */}
            <div className="date-input-container">
              <h2 className="label">Date:</h2>
              <DatePicker
                selected={selectedDatePick}
                onChange={(date) => setSelectedDatePick(date)}
                className="datepicker"
                placeholderText="mm/dd/yyyy"
              />
            </div>

            {/* Time Picker on its own line */}
            <div className="time-input-container">
              <h2 className="label">Time:</h2>
              <input
               value={timePick}
                type="time"
                onChange={(e) => setTimePick(e.target.value)}
                className="timepicker"
              />
            </div>
          </div>
          <button className="add-button mb-10" onClick={() => addDate()}>
            Add
          </button> </> : ""}
      </div>
    </div>
  );
};

export default CalendarSection;