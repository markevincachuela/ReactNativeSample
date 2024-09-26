 import { View, Text, StyleSheet, ScrollView } from 'react-native'
 import React from 'react'
import Header from '../../components/HomeScreen/Header';
import Slider from '../../components/HomeScreen/Slider';
import Category from '../../components/HomeScreen/Category';
import DragonballList from '../../components/HomeScreen/DragonballList';
 
 export default function home() {


   return (
     <ScrollView>
        <Header/>
        <Slider/>
        <Category/>
        <DragonballList/>

        <View style ={{
            height: 50
        }}>

        </View>
     </ScrollView>
   )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
 });
