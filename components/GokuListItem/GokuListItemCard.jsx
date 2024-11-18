import { View, Text, Image } from 'react-native'
import React from 'react'

export default function GokuListItemCard({gokuListItem}) {
  return (
    <View
        style={{
            padding: 10,
            margin: 10,
            borderRadius: 15,
            backgroundColor: '#ffff',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'

        }}>
        <Image source={{uri:gokuListItem.imageUrl}}
            style= {{
                width:120,
                height:120,
                borderRadius:15
            }}
        />

        <View>
            <Text
                style = {{
                    fontSize: 20
                }}
            >{gokuListItem.name}</Text>
            <Text
            style = {{
                fontSize: 15,
                marginTop: 15
            }}
             >{gokuListItem.address}</Text>
            <View
                style={{
                    gap: 5,
                    marginTop: 10
                }}>

                    <Image 
                        style = {{
                            height: 15,
                            width: 15
                        }}
                        source={require('./../../assets/images/star.png')} />
                        
                    <Text
                        style = {{
                            color: '#ffff'
                        }}
                    />
                 
            </View>
        </View>
    </View>
  )
}