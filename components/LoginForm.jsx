import { View, StyleSheet, Button } from "react-native";
import React from 'react';
import { Text, TextInput } from "@react-native-material/core";
import { router } from 'expo-router';


export default function LoginForm(){
    return(
    <View style={styles.container}>
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
        <Button style={styles.submitButton} onPress={loginAPI} color="green" title="Login"></Button>        
    </View>
    );
}

const loginAPI = () =>{
    router.navigate("./content/home", { relativeToDirectory: false });
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: 300,
        flexDirection: 'column',
        flexWrap : 'wrap',
        alignContent: 'stretch',
        rowGap: 20,
        padding: 20,
        height: 350,
        textAlign:'center',
        borderRadius: 20
    },
    textBox:{
        width: '100%'
    },
    submitButton:{
        height:4,
        color:'green',        
    },
    textStyle:{
        fontSize: 15
    }
});
