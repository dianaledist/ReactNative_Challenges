import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'

const Header = () => {

    const URL = "https://disatechgo.com/dianaledist/"

  return (

    <View style={styles.container}>
        
        <Text style={styles.title}>Todo App</Text>
        <Text style={styles.description}>Made by 
          <TouchableOpacity onPress= {() => {URL}}><Text>@dianaledist</Text>
          </TouchableOpacity>
        </Text>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : colors.purple,
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    description: {
        fontSize: 15,
        paddingHorizontal: 20,
    }
})
