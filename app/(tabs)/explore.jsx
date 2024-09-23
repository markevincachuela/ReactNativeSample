import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function  () {
  return (
    <View style={styles.container}>
      <Text style={fontStyle.container}> Explore </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

const fontStyle = StyleSheet.create({
  container: {
    fontFamily: "playwrite"
  }
})