import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import axios from 'axios'

const usefetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get(url, {
        // params: {
        //     articleID: articleID
        // }
    })
        .then(function (response) {
            
            // console.log('response',response.data);
            
            setData(response.data)
        
          })
        .catch(function (error) {
            // console.log(error);
        })
        .then(function () {
            // always executed
            // console.log('Always',data[0]);
        });  
    },[url])
  return {data}
}

export default usefetch