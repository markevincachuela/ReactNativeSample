import { View, Text } from 'react-native'
import React from 'react'

export default function Category() {
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
                fontSize: 20
            }}
            >View All</Text>
        </View>

    </View>
  )
}