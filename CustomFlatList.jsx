import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";


export default function CustomFlatList(props) {
    
   
    const [data, setdata] = useState(props.data1);
  return (
    <View>
           <FlatList
        data={data}
        renderItem={({item}) => 
          (
            <View style={{flex:1,flexDirection:'row'}}>

               <View style={{}}>
                <Image style = {{height:70,width:50}}  source= {{uri:item.image}}
                
                ></Image>
                  
                
                  
               </View>
               <View>

               <Text style={{fontSize:12}}> {item.title} </Text>
               <Text style={{fontSize:10}}> {item.description} </Text>
               <Text> {item.category} </Text>
               <Text > {item.price}$ </Text>
               </View>
               
             

              
              
            </View>
          )
        }
        keyExtractor={item => item.id}
      />

    </View>
  )
}