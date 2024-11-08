import { Text, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/Card'
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useEffect, useState } from 'react';
import fetchData from '@/api/apibase';
import axios from 'axios';


  
export default function HomeScreen(){

  const[data,setData] = useState([]);
  
  const getUserData = async () => {
    try {
      const response = await axios.get('http://192.168.1.10:8080/getAllUser');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(
    () => { 
      getUserData();
    },[]
  );

    return (
      
       <SafeAreaView>
        <ThemedView>
            <Text style={styles.container}>
                Welcome to White field Mudra Ph-4
            </Text>
            {data.map(dat=>(
             <ThemedView key={dat.userId}>
            <Card value={dat.userId}>
            </Card>
            <Card value={dat.userName}>
            </Card>
            <Card value={dat.userRole}>
            </Card>
            </ThemedView>))
            } 
        </ThemedView>
        </SafeAreaView>        
            );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        color:'white',
        height: 30,
        textAlign:'center'
    }
});


