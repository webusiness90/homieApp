import { Text, StyleSheet, View, ScrollView } from 'react-native';
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
      const response = await axios.get('http://192.168.1.10:8080/getAllTicket');
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
       <SafeAreaView style={{height:"100%"}}>
        <Header />
        <View style={styles.welcome}>
        <Text style={{fontWeight:"bold"}}>
                Welcome, below are your tickets....
        </Text>
        </View>
        <View style={styles.viewContainer}>
            <ScrollView style={styles.scrollContainer}>
            {data.map(dat=>(
             <View key={dat.ticketId}>
            <Card values={dat}>
            </Card>
            </View>))
            } 
            </ScrollView>
        </View>
        </SafeAreaView>        
            );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9de0ba",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer:{
    height:300,
    width:350,
    backgroundColor:"#9de0ba"
  },
  viewContainer:{
    alignItems: "center",
    justifyContent: "center",
    height:"100%",
    backgroundColor:"#9de0ba"
  },
  titleColor:{
    color:'#9de0ba'
  },
  welcome:{
    backgroundColor: "#9de0ba",
    height:40,
    padding:10
  }
});


