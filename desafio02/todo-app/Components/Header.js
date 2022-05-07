import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'
import Footer from './Footer'

const Header = () => {

  const year = new Date().getFullYear()
  console.log(year)

  return (

    <View style={styles.container}>
        
        <Text style={styles.title}>To-do App {year}</Text>
        <Text style={styles.description}>Made with 💖🔥 by   
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/dianaledist')}> Diana Leonor Di Stefano
          </TouchableOpacity>
        </Text>
       {/*  <Footer styles={styles.linksHeader} /> */}
        
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
    }, 
/*     linksHeader: {
      flexDirection: 'row',
      padding: 10,
    } */
})
