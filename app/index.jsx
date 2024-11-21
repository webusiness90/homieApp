import {View, Text, StyleSheet, Image} from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';
import Header from './Header';
import Footer from './Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login(){
    return (
    <SafeAreaView style={styles.container}> 
        <Header />
        <LoginForm />
        <Footer />
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 15
    }
});