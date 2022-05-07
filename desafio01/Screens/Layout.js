import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Item from '../Components/Item'
import {colors} from '../Styles/Colors'
import ButtonCustom from '../Components/button'

const Layout = () => {

    const [input, setInput] = useState("")

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput
                placeholder='Escriba su tarea'
                style={styles.input}
                onChangeText={setInput}
            />

           {/*  <Button 
            title='add to-do'/> */}

           {/*  <TouchableOpacity style={styles.buttonTouch}>
                <Text>Add to-do</Text>
            </TouchableOpacity> */}

            <ButtonCustom/>
        </View>
            
        <View style={styles.itemList}>
            <Text> Cosas para hacer</Text>
           <Item item={{id:1, todo: "Armar red social UX"}}></Item>
           <Item item={{id:2, todo: "Subir tutorial de Figma"}}></Item>
           <Item item={{id:3, todo: "Agregar gente en LinkedIn"}}></Item>
           <Item item={{id:4, todo: "Hacer backup de la pc"}}></Item>
        </View>
        
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 50,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        fontSize: 18,
        height: 35,
    },
    itemList: {
        backgroundColor: colors.orange,
        width: '95%',
        padding: 20,
    }
})