import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {colors} from '../Styles/Colors'

const ButtonCustom = ({button}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonTouch}>
        <Text style={styles.text}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    buttonTouch: {
        padding: 10,
        backgroundColor: colors.rose,
    },
    text: {
        fontSize: 18,
        color: colors.white
    }
})