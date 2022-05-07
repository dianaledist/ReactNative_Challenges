import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonPlus from './ButtonPlus'
import { colors } from '../styles/Colors'

const InputAdd = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
            console.log(input)
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu tarea pendiente"
                onChangeText={setInput}
                value={input}
            />
            <ButtonPlus onPress={()=> handleAddAux()}/>
        </View>
    )
}

export default InputAdd

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 30,
        marginBottom: 20,
        padding: 15,
        width: 400,
    },
    input: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

        width: 300,
        borderWidth: 0,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 60,
   /*      shadowColor: colors.gray,
        shadowOffset: {width: -1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3, */

        shadowColor: colors.gray,
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
    },
})