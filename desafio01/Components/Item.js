import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.todo}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        color: colors.green,
    }
})