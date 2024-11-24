import {View, Text, Image, StyleSheet} from 'react-native';
import { AppBar } from "@react-native-material/core";

export default function Header(){
    return(<AppBar color="green" title="White Field Mudra Ph - 4" leading={lead} trailing={trail} />);
}

function lead(){
    return(<Image style={styles.img} source={require('../assets/images/logo.png')} />);
}

function trail(){
    return(<Text>log out</Text>)
}

const styles = StyleSheet.create({
    logo:{
        alignContent: 'space-evenly',
        flexDirection: 'row',
        textAlign:'center',
        columnGap:10,
        position:'absolute',
        top:35,
        backgroundColor: "#073312",
        width: 300,
        borderRadius: 20
    },
    title:{
        color:'black',
        fontSize: 20,
        fontWeight: "bold",
        marginTop:4
    },
    img:{
        width: 40,
        height:40,
        borderRadius: 20
    }
});