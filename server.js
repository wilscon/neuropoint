const express = require('express');
const path = require('path');
const sendgrid = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

sendgrid.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
app.use(express.static(path.join(__dirname, 'build')));

app.post("/appointmentBooked", async (req, res) => {

  const protocol = req.protocol;              
  const host = req.get('host');              
  const fullRootUrl = `${protocol}://${host}`;

  try {
    await sendgrid.send({
      to: "connor.wilson48@gmail.com",
      from: "appointments@connor-wilson.com",
      subject: "Appointment Booked",
      html: `<p>Appointment Booked with Neuropoint</p>
      <p>Appointment Details: </p>
      <p>Date: <strong>${req.body.day}</strong></p>
      <p>Time: <strong>${req.body.time}</strong></p>
      <p> Location: ${req.body.address} ${req.body.city}, ${req.body.state}, ${req.body.zipCode} </p>
      <p> First Name: ${req.body.firstName} </p>
      <p> Last Name: ${req.body.lastName} </p>
      <p> Email: ${req.body.email} </p>
      <p> Phone Number: ${req.body.phoneNumber}</p>
      <p> Notes: ${req.body.notes} </p>
      <a href="${fullRootUrl}/editbook/${req.body.id}" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: #00888E;
                   padding: 12px 24px;
                   border-radius: 5px;
                 ">View Appointment</a>
      <a href="${fullRootUrl}/schedule" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: #00888E;
                   padding: 12px 24px;
                   border-radius: 5px;
                 ">View Schedule</a>`
          
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.response.body });
  }
});


app.post("/appointmentBookedUser", async(req, res) =>{
  
  const protocol = req.protocol;             
  const host = req.get('host');              
  const fullRootUrl = `${protocol}://${host}`; 

  try{
    await sendgrid.send({
      to: req.body.email,
      from: "appointments@connor-wilson.com",
      subject: "Neuropoint Appointment Booked",
      html: `<p>Appointment Booked with Neuropoint</p>
      <p>Appointment Details: </p>
      <p>Date: <strong>${req.body.day}</strong></p>
      <p>Time: <strong>${req.body.time}</strong></p>
      <p> Location: ${req.body.address} ${req.body.city}, ${req.body.state}, ${req.body.zipCode} </p>
      <p> First Name: ${req.body.firstName} </p>
      <p> Last Name: ${req.body.lastName} </p>
      <p> Phone Number: ${req.body.phoneNumber} </p>
      <p> Notes: ${req.body.notes} </p>
      <a href="${fullRootUrl}/cancel/${req.body.id}" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: red;
                   padding: 12px 24px;
                   border-radius: 5px;
                 "> Cancel Appointment </a>
      <a href="${fullRootUrl}/editbook/${req.body.id}" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: #00888E;
                   padding: 12px 24px;
                   border-radius: 5px;
                 ">Edit Details</a>`
      
    
    });
    res.json({ success: true });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: error.response.body });
  }

});

app.post("/appointmentCanceled", async (req, res) => {

  const protocol = req.protocol;             
  const host = req.get('host');              
  const fullRootUrl = `${protocol}://${host}`; 

  try{
    await sendgrid.send({
      to: "connor.wilson48@gmail.com",
      from: "appointments@connor-wilson.com",
      subject: "Neuropoint Appointment Canceled",
      html: `<p>Appointment Canceled on <strong>${req.body.day}</strong> at <strong>${req.body.time}</p>
            <p>Appointment Details:<p>  
            <p>Location: ${req.body.location}</p>
            <p>First Name: ${req.body.firstName}</p>
            <p>Last Name: ${req.body.lastName}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone Number: ${req.body.phoneNumber}</p>
            <p>Notes: ${req.body.notes}</p>
            <a href="${fullRootUrl}/schedule" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: #00888E;
                   padding: 12px 24px;
                   border-radius: 5px;
                 ">View Schedule</a>
            `,
    
    });

  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: error.response.body });
  }

});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Environment:", process.env.NODE_ENV);
});