import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import CategoryItem from './CategoryItem'
import { useRouter } from 'expo-router'
export default function Category() {

    const [categoryList, setCategoryList] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        getCategoryList()
    },[]);

    const getCategoryList = async()=> {
        setCategoryList([])
        const queryCategory = query(collection(db,"Caterogy"));
        const getCategorySnapShot = await getDocs(queryCategory);

        getCategorySnapShot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(prev=>[...prev,doc.data()])
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
            }}>Category</Text>

            <Text style ={{
                fontSize: 20,
                color: Colors.PrimaryColor
            }}
            >View All</Text>
        </View>

        <FlatList
            data= {categoryList}
            showsHorizontalScrollIndicator = {false}
            horizontal = {true}
            style = {{
                marginLeft: 20
            }}
            renderItem={ ({item, index})=>(
                <CategoryItem 
                category ={item} 
                 key={index}
                 onCategoryPress={(category)=> 
                    // console.log(category)
                    router.push('/dragonballList/'+item.name)
                }
                 />
            )}
        
        />

    </View>
  )
}