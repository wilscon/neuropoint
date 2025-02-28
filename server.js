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

app.post("/send-email", async (req, res) => {
  try {
    await sendgrid.send({
      to: "connor.wilson48@gmail.com",
      from: "connor.wilson48@gmail.com",
      subject: "Appointment Booked",
      text: "First Name: " + req.body.firstName + '\n' + 
            "Last Name: " + req.body.lastName + '\n' + 
            "Email: " + req.body.email + '\n' + 
            "Address: " + req.body.email + '\n' + 
            "City: " + req.body.city + '\n' +
            "State: " + req.body.state + '\n' +
            "Zip Code: " + req.body.zipCode + '\n' +
            "Notes: " + req.body.notes + '\n'
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.response.body });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});