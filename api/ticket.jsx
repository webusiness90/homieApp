import axios from 'axios';
import BASE_URL from './apibase';


const createTicketUrl = '/createTicket';

const createTicketAPI = async (payload) => {

        await axios.post(BASE_URL+createTicketUrl,payload)
        .then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error.data);
        });
}

export default createTicketAPI;