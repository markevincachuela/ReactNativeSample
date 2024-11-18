import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query,where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig'
import { FlatList } from 'react-native';
import GokuListItemCard from '../../components/GokuListItem/GokuListItemCard';

export default function DragonBallListByCategory() {

    const [getGokuList, setGokuList] = useState([]);
    const navigation = useNavigation();
    const {category}= useLocalSearchParams();
    

    useEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            headerTitle: category
        });
        getDragonBallList();
    },[]);


    const getDragonBallList= async ()=> {
        setGokuList([])
        const queryDragonBallItem = query(collection(db,"GokuList"), where("category",'==',category));
        const queryDragonBallItemSnapShot = await getDocs(queryDragonBallItem);
        
        queryDragonBallItemSnapShot.forEach((doc) =>{
            console.log(doc.data());
            setGokuList(prev=> [...prev,doc.data()]);
        })
        
    }
  return (
    <View>
         <Text>{category}</Text>

        <View>
        <FlatList
                data={getGokuList}
                renderItem={({item,index})=>(
                    <GokuListItemCard
                    key = {index}
                    gokuListItem = {item}
                    />
                )}
                />
        </View>
        
     
    </View>
  )
}