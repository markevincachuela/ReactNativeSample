import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import {collection, getDocs, query} from 'firebase/firestore'
import { db } from './../../config/FirebaseConfig'
import { useState } from 'react'

export default function Slider() {
    
const [sliderList,setSliderlist] = useState([]);
  

    useEffect(() =>{
        getSliderList();
    },[]);
    

    const getSliderList = async() => {
      setSliderlist([]);
        const querySlider = query(collection(db,'Slider'));
        const getSlider = await getDocs(querySlider);

        getSlider.forEach((doc) => {
          console.log(doc.data())
           setSliderlist(prev=>[...prev,doc.data()]);
        });
    }

  return (
    <View>
      <Text style={{
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20,
        marginBottom: 5
      }}>Dragon ball Slider</Text>

      <FlatList
        data = {sliderList}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        style = {{
          paddingLeft: 20,
          marginTop: 10
        }}
        renderItem={({item,index}) =>(
          <Image source ={{uri:item.imageUrl}} 
            style ={{
              width: 300,
              height: 160,
              borderRadius: 15,
              marginRight: 20
            }}
          />
        )}> 

      </FlatList>
    </View>
  )
}