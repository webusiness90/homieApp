import * as yup from 'yup'

const createTicketSchema = yup.object().shape({
    ticketDesc: yup
    .string()
    .required('Ticket Description is Required'),
})

export default createTicketSchema;