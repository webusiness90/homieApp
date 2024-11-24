import { StyleSheet, View, Text } from "react-native";

export default function Card({values}){
    return (
        <View style={styles.container}>
            <Text style={styles.content}>ID:{values.ticketId}</Text>
            <Text style={styles.content}>Ticket Desc: {values.ticketDesc}</Text>
            <Text style={styles.content}>Created Date: {values.createdDate}</Text>
            <Text style={styles.content}>Created By: {values.createdBy}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        height: 128,
        width: 250,
        margin: '5%',
        borderRadius: 20,
        padding:20
    },
    content:{
        color:"white"
    }
});