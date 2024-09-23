 import { View, Text, StyleSheet } from 'react-native'
 import React from 'react'
import Header from '../../components/HomeScreen/Header';
import Slider from '../../components/HomeScreen/Slider';
import Category from '../../components/HomeScreen/Category';
 
 export default function home() {


   return (
     <View>
        <Header/>
        <Slider/>
        <Category/>
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
