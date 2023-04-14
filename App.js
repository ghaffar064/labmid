import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import CustomButton from './CustomButton';
import usefetch from './usefetch';

import axios from 'axios'

import CustomFlatList from './CustomFlatList';

import CustomSectionList from './CustomSectionList';



export default function App() {

  const {data }= usefetch('https://fakestoreapi.com/products');

  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
 
 
 


  loginBtnPressed=()=>{

  }

  return (
    <View style={styles.container}>
      

      <View style={{flex:0.5}}>
      <CustomFlatList data1={data}/>
      </View>
      
      
     
      <View style={{flex:0.5}}>
      <CustomSectionList data2={DATA} />
      </View>
    

  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100
  },
});
