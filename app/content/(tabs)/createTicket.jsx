import { SafeAreaView  } from 'react-native-safe-area-context';
import { StyleSheet, Button, Text } from 'react-native';
import {ThemedText, ThemedView} from '../../../components/ThemedText'
import  TicketForm from '@/components/TicketForm'

export default function createTicket(){
    return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.title}> 
                Create Ticket
            </Text>
        <TicketForm></TicketForm>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 40,
        color: "#fff",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    },
    header:{
        margin:"5%"
    }
});