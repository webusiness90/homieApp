import axios from 'axios';
import React, { useState} from 'react';

const API_URL = 'http://192.168.1.10:8080/getAllUser';

export default async function fetchData(){
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
