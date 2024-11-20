import { View, StyleSheet, Button, Image } from "react-native";
import React from 'react';
import { Text, TextInput } from "@react-native-material/core";


export default function TicketForm(){
    return(
    <View style={styles.container}>
        <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')} />
        </View>
        <Text style={styles.textStyle}>User Name</Text> 
        <TextInput 
                name="userName"
                style={styles.textBox}
                multiline={true}
                variant="standard" />
        <Text style={styles.textStyle}>Password</Text> 
        <TextInput 
                name="Password"
                style={styles.textBox}
                multiline={true}
                variant="standard" />
        <Button style={styles.submitButton} color="green" title="Login"></Button>        
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: 250,
        flexDirection: 'column',
        flexWrap : 'wrap',
        alignContent: 'space-evenly',
        rowGap: 20,
        padding: 20,
        height: 500,
        width:300,
        textAlign:'center'
    },
    textBox:{
        width: '100%'
    },
    submitButton:{
        height:4,
        color:'green'
    },
    textStyle:{
        fontSize: 15
    },
    logo:{
        alignContent: 'space-evenly',
        flexDirection: 'column',
        textAlign:'center'
    }
});
