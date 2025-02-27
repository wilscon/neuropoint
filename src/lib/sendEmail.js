import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendEmail = async (firstName, lastName, email, address, city, state, zipCode, notes) => {

    console.log("API URL: " + API_BASE_URL)
    try{
            const response = await axios.post(`${API_BASE_URL}/send-email`, 
            { 
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address, 
                city: city,
                state: state,
                zipCode: zipCode,
                notes: notes,
            });
        }
        catch(error){
                console.log("Error sending email: ", error.response ? error.response.data : error);
        }
}