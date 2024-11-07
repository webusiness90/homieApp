import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import React, { useEffect, useState } from 'react';

export default function TicketForm(){

    const [message, setMessage] = useState("");
    const [ticketType, setTicketType] = useState("");
    const [ticketStatus, setTicketStatus] = useState("");

    return (
        <ThemedView style={styles.container}> 
            <Text> Ticket Description</Text>
            <TextInput style={styles.textBox}
                value={message}
                onChangeText={(text) => setMessage(text)}
            />
            <Text> Ticket Type</Text>
            <TextInput style={styles.textBox}
                value={ticketType}
                onChangeText={(text) => setTicketType(text)}
            />
            <Text> Ticket Status</Text>
            <TextInput style={styles.textBox}
                value={ticketStatus}
                onChangeText={(text) => setTicketStatus(text)}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        color:'white',
        textAlign:'center',
        height: '50%',
        width:'80%',
        position: 'relative',
        flexDirection: 'row',
        flexWrap : 'wrap',
        rowGap: 10,
        columnGap:25,
        alignContent: 'flex-start',
    },
    textBox:{
        borderWidth: 1
    }
});
