import { View, StyleSheet, Button, ScrollView } from "react-native";
import React,{useState, useEffect} from 'react';
import { Text, TextInput } from "@react-native-material/core";
import { Formik } from 'formik';
import createTicketAPI from '../api/ticket';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import BASE_URL from '../api/apibase';
import createTicketSchema from './validation';
import TicketCategory from "./TicketCategory";


export default function TicketForm(){

    const getTicketTypeUrl = '/getTicketType';
    const getTicketStatusUrl = '/getTicketStatus';

    const [statusList,setStatusList] = useState([]);
    const [typeList,setTypeList] = useState([]);

    const getTicketType = async () => {
        const response = await axios.get(BASE_URL+getTicketTypeUrl);
        setStatusList(response.data);
    }
    
    const getTicketStatus = async () => {
        const response = await axios.get(BASE_URL+getTicketStatusUrl);
        setTypeList(response.data);
    }

    useEffect(()=>{
        getTicketStatus();
        getTicketType();
    },[]);

    return (
        <Formik initialValues={{}} validationSchema={createTicketSchema} onSubmit={values => createTicketAPI(values)}>

        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (

        <ScrollView style={styles.container}>
            <View style={styles.viewContainer}>
            <Text style={styles.textStyle}>Ticket Category</Text>     
            <TicketCategory />
            <Text style={styles.textStyle}>Ticket Type</Text>     
            <Picker
                onValueChange={(itemValue, itemIndex) =>
                    values.ticketTypeId=itemValue
                }>
                <Picker.Item key='0' label='Please select' value='0'></Picker.Item>
                {getDropDownValue(statusList)}
            </Picker>
            <Text style={styles.textStyle}>Ticket Status</Text>
            <Picker 
                onValueChange={(itemValue, itemIndex) =>
                    values.ticketStatus=itemValue
                }>
                <Picker.Item key='0' label='Please select' value='0'></Picker.Item>
                {getDropDownValue(typeList)}
            </Picker>
            <Text style={styles.textStyle}>Ticket Desc</Text> 
            <TextInput 
                name="ticketDesc"
                style={styles.textBox}
                multiline={true}
                variant="standard" 
                value={values.ticketDesc} 
                onChangeText={handleChange('ticketDesc')} 
                onBlur={handleBlur('ticketDesc')}/>
                {errors.ticketDesc && <Text style={{ fontSize: 10, color: 'red' }}>{errors.ticketDesc}</Text>}

            <Button style={styles.submitButton} color="green" onPress={handleSubmit} title="Create Ticket"></Button>
            </View>
        </ScrollView>
         )}

         </Formik>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 20,        
        width:300,
        borderRadius: 20,
        marginTop:20
    },
    viewContainer:{
        flexDirection: 'column',
        flexWrap:"wrap",
        rowGap:10,
        height:600
    },
    textBox:{
        width: '100%'
    },
    submitButton:{
        height:4,
        color:'green'
    },
    textStyle:{
        fontSize: 15,
        fontWeight:"bold"
    }
});

const getDropDownValue = (data) => {
    return data.map(item => <Picker.Item key={item.value} label={item.label} value={item.value}></Picker.Item>)
}
