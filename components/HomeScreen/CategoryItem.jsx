import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=> onCategoryPress(category)}>
        <View
            style = {{
                padding: 15,
                backgroundColor : Colors.PrimaryColor,
                borderRadius: 99,
                marginRight : 15
            }}>

            <Image 
                style ={{
                    width: 40,
                    height: 40
                }}
            source ={{uri:category.icon}}/>
         </View>
         <Text
            style = {{
                fontSize: 12,
                textAlign: 'center',
                marginTop: 5,
                marginRight: 10
            }}
            >{category.name}</Text>
    </TouchableOpacity>
  )
}