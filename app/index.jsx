import {View, Text, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login(){
    return (
    <SafeAreaView style={styles.container}> 
    <View style={styles.logo}>
        <Image style={styles.img} source={require('../assets/images/logo.png')} />
        <Text style={styles.title}>White Field Mudra Ph - 4</Text>
    </View>
        <LoginForm />
        <View style={styles.footer}>
            <Text>Powered by WeBusiness</Text>
        </View>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 15
    },
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
    },
    footer:{
        position:'absolute',
        bottom:20
    }
});