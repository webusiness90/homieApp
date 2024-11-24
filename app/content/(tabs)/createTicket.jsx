import { SafeAreaView  } from 'react-native-safe-area-context';
import { StyleSheet, View, Text } from 'react-native';
import {ThemedText, ThemedView} from '../../../components/ThemedText'
import  TicketForm from '@/components/TicketForm'
import Header from '@/app/Header'
import Footer from '@/app/Footer'

export default function createTicket(){
    return (
    <SafeAreaView style={{height:"100%"}}>
        <Header />
        <View style={styles.container}>
        <TicketForm />
        </View>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9de0ba",
        alignItems: "center",
        height:"100%"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop:10
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        marginTop: 15,
        color: "#000",
    }
});