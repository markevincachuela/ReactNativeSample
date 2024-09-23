 import { View, Text, StyleSheet } from 'react-native'
 import React from 'react'
import Header from '../../components/HomeScreen/Header';
import Slider from '../../components/HomeScreen/Slider';
 
 export default function home() {


   return (
     <View>
        <Header/>
        <Slider/>
     </View>
   )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
 });
