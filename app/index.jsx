import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import LoginForm from '@/components/LoginForm';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login(){
    return (
    <SafeAreaView style={styles.container}> 
        <LoginForm></LoginForm>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
    }
});