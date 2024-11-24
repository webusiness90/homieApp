import { StyleSheet, View, Text } from "react-native";

export default function Card({values}){
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <View style={styles.cardHeader}>
                <Text style={styles.content}>Ticket ID: {values.ticketId}</Text>
            </View>
            <View style={styles.cardBody}>
                <Text>Description:</Text>
                <Text>{values.ticketDesc}</Text>
            </View>
            <View style={styles.cardFooter}>
            <Text style={styles.content}>Date: {values.createdDate}</Text>
            <Text style={styles.content}>By: {values.createdBy}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        height: 120,
        width: 300,
        marginBottom:40,
        marginLeft:25,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    content:{
        color:"white"
    },
    cardHeader:{
        height:20
    },
    cardBody:{
        height:70,
        backgroundColor:'white'
    },
    cardFooter:{
        height:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        columnGap:20
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.9,
        shadowRadius: 10
    }
});