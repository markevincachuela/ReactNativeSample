import { View, Text, Image } from 'react-native'
import React from 'react'

export default function DragonBallCardItem({dragonballItem}) {
  return (
    <View style ={{
        marginLeft: 15,
            padding: 10,
            backgroundColor: '#344feb',
            borderRadius: 15
    }}>
        <Image 
        style={{
                width: 200,
                height: 130,
                borderRadius: 15
            
            }}
            source={{uri:dragonballItem?.imageUrl}}
            >
        </Image>
        <View style = {{
            marginTop: 10,
            gap: 5
        }}>
            <Text style ={{
                fontSize: 15,
                color: '#fff',
                textAlign: 'center',
            }}>{dragonballItem.name}</Text>

            <Text style ={{
                fontSize: 15,
                color: '#fff',
                textAlign: 'center',
            }}>{dragonballItem.address}</Text>

            <View style ={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style ={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap : 5
                        }}>
                            <Image
                                style ={{
                                    height: 15,
                                    width: 15
                                }}
                                source = {require('./../../assets/images/star.png')} />
                            <Text style ={{
                                color: '#fff',
                            }}
                            >5.0</Text>
                    </View>
                    
                <Text style = {{
                color: '#fff',
                fontSize: 10,
                padding: 3
                }} >{dragonballItem.category}</Text>
            </View>
        </View>
    </View>
    
  )
}