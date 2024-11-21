import { SafeAreaView  } from 'react-native-safe-area-context';
import { StyleSheet, Button, Text } from 'react-native';
import {ThemedText, ThemedView} from '../../../components/ThemedText'
import  TicketForm from '@/components/TicketForm'
import Header from '@/app/Header'
import Footer from '@/app/Footer'

export default function createTicket(){
    return (
    <SafeAreaView style={styles.container}>
        <Header />
            <Text style={styles.title}> 
                Create Ticket
            </Text>
        <TicketForm />
        <Footer />
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
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        position:'absolute',
        top:90
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    }
});