import {View, Text, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';
import Header from './Header';
import Footer from './Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login(){
    return (
    <SafeAreaView style={{height:"100%"}}> 
        <Header />
        <View style={styles.container}>
        <LoginForm />
        </View>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#9de0ba",
      height:"100%",
      alignItems:"center"
    }
});