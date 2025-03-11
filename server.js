const express = require('express');
const path = require('path');
const sendgrid = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.static(path.join(__dirname, 'build')));

app.post("/appointment-booked", async (req, res) => {
  try {
    await sendgrid.send({
      to: "connor.wilson48@gmail.com",
      from: "appointments@connor-wilson.com",
      subject: "Appointment Booked",
      text: "Appointment Booked for: " + '\n' +
            "First Name: " + req.body.firstName + '\n' + 
            "Last Name: " + req.body.lastName + '\n' + 
            "Email: " + req.body.email + '\n' + 
            "Address: " + req.body.address + '\n' + 
            "City: " + req.body.city + '\n' +
            "State: " + req.body.state + '\n' +
            "Zip Code: " + req.body.zipCode + '\n' +
            "Notes: " + req.body.notes + '\n',
      html: `<a href="https://neuro-point.com" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: #007BFF;
                   padding: 12px 24px;
                   border-radius: 5px;
                 "> click me </a>`
          
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.response.body });
  }
});


app.post("/appointmentBookedUser", async(req, res) =>{
  try{
    await sendgrid.send({
      to: req.body.email,
      from: "appointments@connor-wilson.com",
      subject: "Neuropoint Appointment Booked",
      html: `<a href="http://localhost:5000/cancel/${req.body.id}" 
                 target="_blank" 
                 style="
                   display: inline-block;
                   font-size: 16px;
                   color: #ffffff;
                   text-decoration: none;
                   background-color: red;
                   padding: 12px 24px;
                   border-radius: 5px;
                 "> Cancel Appointment </a>`
      
    
    });
    res.json({ success: true });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: error.response.body });
  }

});

app.post("/appointmentCanceled", async (req, res) => {

  try{
    await sendgrid.send({
      to: "connor.wilson48@gmail.com",
      from: "appointments@connor-wilson.com",
      subject: "Neuropoint Appointment Canceled",
      text: "Appointment Canceled"
    
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
});