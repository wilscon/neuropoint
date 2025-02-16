import React from "react";

const Modal = ({ 
    selectedDate, 
    selectedTime, 
    firstName, setFirstName, 
    lastName, setLastName, 
    email, setEmail, 
    address, setAddress, 
    city, setCity, 
    state, setState, 
    zipCode, setZipCode, 
    notes, setNotes, 
    closeModal, 
    handleSubmit 
  }) => {
    if (!selectedTime) return null; // Prevents rendering if no time is selected
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          {/* Close button at the top-right corner */}
          <button className="modal-close-button" onClick={closeModal}>&times;</button>
  
          <h2>Confirm Appointment</h2>
          <strong>
            {`${new Date(selectedDate).toLocaleDateString("en-US", { 
              month: "long", day: "numeric", year: "numeric" 
            })} at ${selectedTime}`}
          </strong>
  
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
  
            <button type="submit" className="submit-button">Confirm</button>
          </form>
          <button className="close-button" onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Modal;