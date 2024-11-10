import axios from 'axios';
import BASE_URL from './apibase';


const getTicketTypeUrl = '/getTicketType';
const getTicketStatusUrl = '/getTicketStatus';

const getTicketType = async () => {
    const response = await axios.get(BASE_URL+getTicketTypeUrl);
    console.log("Inside"+response);
    return response;
}

const getTicketStatus = async () => {
    return await axios.get(BASE_URL+getTicketStatusUrl);
}

export {
    getTicketType, 
    getTicketStatus
}