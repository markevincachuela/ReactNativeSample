import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import DragonBallCard from './DragonBallCard'

export default function DragonballList() {

    const [dragonBallList, setDragonBallList] = useState([]);

    useEffect(()=>{
        getDragonballList()
    },[]);

    const getDragonballList = async() => {
        setDragonBallList([])
        const queryDragonBall = query(collection(db,"GokuList"));
        const getDragonBallSnapShot = await getDocs(queryDragonBall);

        getDragonBallSnapShot.forEach((doc)=>{
            console.log(doc.data());
            setDragonBallList(prev=>[...prev,doc.data()])
        })
    }

  return (
    <View>
        <View style ={{
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text style ={{
                fontSize: 20
            }}>Dragon ball List</Text>

            <Text style ={{
                fontSize: 20,
                color: Colors.PrimaryColor
            }}
            >View All</Text>

        </View>

        <FlatList
                data={dragonBallList}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                renderItem={({item,index})=>(
                    <DragonBallCard
                    key = {index}
                    dragonball = {item}
                    />
                )}
                />

    </View>
  )
}