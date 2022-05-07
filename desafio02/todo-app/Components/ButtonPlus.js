import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'

const ButtonPlus = ({onPress}) => {
  
/*   React.useEffect(() => {
 
    console.log('hola');
 
  }, [] ); */

  return (

    <TouchableOpacity style={styles.button} onPress={onPress}>
      
      <Text style={styles.text}>+</Text>    
    </TouchableOpacity>
  )
}

export default ButtonPlus

const styles = StyleSheet.create({

    button: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: 60,
        height: 60,
        backgroundColor: colors.purple,
        alignItems: 'center',
        justifyContent: 'center',
        
        shadowColor: colors.gray,
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
    },
        text: {
        fontSize: 30,
        fontWeight: "bold",
    }
})