import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendEmail = async (firstName, lastName, email, address, city, state, zipCode, notes) => {

    const route =  "/appointment-booked";
    console.log("API URL: " + API_BASE_URL+route)
    try{
            const response = await axios.post(`${API_BASE_URL}` + route, 
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

export const sendEmailToUser = async (firstName, lastName, email, address, city, state, zipCode, notes) => {
    const route = "/appointmentBookedUser";
    console.log("API URL: " + API_BASE_URL+route)
    try{
        const response = await axios.post(`${API_BASE_URL}` + route, 
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