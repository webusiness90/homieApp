import { Text, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/Card'
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useEffect, useState } from 'react';
import fetchData from '@/api/apibase';
import axios from 'axios';

import Header from '@/app/Header'
import Footer from '@/app/Footer'


  
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
      
       <SafeAreaView style={styles.container}>
        <Header />
        <View>
            <Text >
                Welcome, below are your tickets....
            </Text>
            {data.map(dat=>(
             <View key={dat.userId}>
            <Card value={dat.userId}>
            </Card>
            <Card value={dat.userName}>
            </Card>
            <Card value={dat.userRole}>
            </Card>
            </View>))
            } 
        </View>
        <Footer />
        </SafeAreaView>        
            );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  }
});


