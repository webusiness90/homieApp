import { View, StyleSheet, Button } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import React, { useEffect, useState } from 'react';
import { Text, TextInput } from "@react-native-material/core";
import { Formik } from 'formik';

export default function TicketForm(){

    return (
        <Formik initialValues={{ TicketDesc: '' }} onSubmit={values => console.log(values)}>

        {({ handleChange, handleBlur, handleSubmit, values }) => (

        <View style={styles.container}> 
            <TextInput 
                style={styles.textBox}
                label="Ticket Desc" 
                variant="standard" 
                value={values.TicketDesc} 
                onChangeText={handleChange('TicketDesc')} 
                onBlur={handleBlur('TicketDesc')}/>
            <TextInput 
                style={styles.textBox}
                label="Ticket Type" 
                variant="standard"  
                value={values.TicketType}
                onChangeText={handleChange('TicketType')} 
                onBlur={handleBlur('TicketType')}/>
            <TextInput 
                style={styles.textBox}
                label="Ticket Status" 
                variant="standard" 
                value={values.TicketStatus} 
                onChangeText={handleChange('TicketStatus')} 
                onBlur={handleBlur('TicketStatus')}/>

            <Button style={styles.submitButton} onPress={handleSubmit} title="Create Ticket"></Button>
        </View>
         )}

         </Formik>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:0.75,
        backgroundColor: 'white',
        color:'white',
        textAlign:'center',
        width: 250,
        position: 'relative',
        flexDirection: 'column',
        flexWrap : 'wrap',
        alignContent: 'flex-centre',
        Gap: 10,
        padding: 20
    },
    textBox:{
        width: '100%'
    },
    submitButton:{
        height:4
    }
});
