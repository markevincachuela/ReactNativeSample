 import { View, Text } from 'react-native'
 import React from 'react'
 import { Tabs } from 'expo-router'
 import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
 
 export default function TabLayout() {
   return (
     <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PrimaryColor
     }}>
        <Tabs.Screen name = 'home' 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => <Ionicons name="home" 
          size={24} 
          color={color} />
        }}/> 
        <Tabs.Screen name = 'explore'
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({color}) => <Ionicons 
          name="accessibility" 
          size={24} 
          color={color} />
        }}
        />
        <Tabs.Screen name = 'profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon : ({color}) => <Ionicons 
          name="settings" 
          size={24} 
          color={color} />
        }}
        
        /> 
     </Tabs>
   )
 }