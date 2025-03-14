import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const sendEmail = async (firstName, lastName, email, address, city, state, zipCode, notes,id,  day, time,phoneNumber) => {

    const route =  "/appointmentBooked";
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
                day: day,
                time: time,
                id: id,
                phoneNumber: phoneNumber,
            });
        }
        catch(error){
                console.log("Error sending email: ", error.response ? error.response.data : error);
        }
}

export const sendEmailToUser = async (firstName, lastName, email, address, city, state, zipCode, notes,id, day, time, phoneNumber) => {
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
            id: id,
            day: day,
            time: time,
            phoneNumber: phoneNumber,
        });
    }
    catch(error){
            console.log("Error sending email: ", error.response ? error.response.data : error);
    }


}

export const sendDeleteEmail = async (day, time, location, firstName, lastName, email, notes, phoneNumber) => {

    const route = "/appointmentCanceled";
    console.log("API URL: " + API_BASE_URL+route)
    try{
        const response = await axios.post(`${API_BASE_URL}` + route, 
        { 
            day: day,
            time: time,
            location: location,
            firstName: firstName,
            lastName: lastName,
            email: email,
            notes: notes,
            phoneNumber: phoneNumber, 
        });
    }
    catch(error){
        console.log("Error sending email: ", error.response ? error.response.data : error);
    }

}