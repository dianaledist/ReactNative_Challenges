import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'

const Footer = () => {
  return (
    <View styles={styles.container}>
      <Text onPress={() => Linking.openURL('https://disatechgo.com/dianaledist/')}>Portfolio</Text>
      <Text onPress={() => Linking.openURL('https://disatechgo.com/dianaledist/')}>GitHub</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
})