import {View, Text, Image, StyleSheet} from 'react-native';

export default function Header(){
    return(<View style={styles.logo}>
        <Image style={styles.img} source={require('../assets/images/logo.png')} />
        <Text style={styles.title}>White Field Mudra Ph - 4</Text>
    </View>);
}

const styles = StyleSheet.create({
    logo:{
        alignContent: 'space-evenly',
        flexDirection: 'row',
        textAlign:'center',
        columnGap:10,
        position:'absolute',
        top:35
    },
    title:{
        color:'white',
        fontSize: 20,
        fontWeight: "bold"
    },
    img:{
        width: 40,
        height:40,
        borderRadius: 20
    }
});