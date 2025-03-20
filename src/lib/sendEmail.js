import axios from "axios";

const protocol = window.location.protocol;
const host = window.location.host;
const API_BASE_URL = `${protocol}//${host}`;

export const sendEmail = async (firstName, lastName, email, address, city, state, zipCode, notes,id,  day, time,phoneNumber) => {

    const route =  "/appointmentBooked";

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