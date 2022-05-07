import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    todoList,
    handleDelete,
    todoSelected, 

}) => {

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
            
            <View style={styles.content}>
                <View style={styles.TopQuestion}>
                    <Text style={styles.question}>¿Quieres borrar la tarea?</Text>
                    <Text style={styles.questionFire}>🔥🔥🔥</Text>
                </View>
                
                
                <View style={styles.selectButtons}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                        <Text style={styles.button}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setModalVisible(false); handleDelete()}} >
                        <Text style={styles.button}>
                            Aceptar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    content: {
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        height: 300,
        width: 300,
        backgroundColor: colors.white,
        borderColor: colors.purple,
        borderWidth: 1,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        
        elevation: 20,
    },
    TopQuestion: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    question: {
        fontSize: 20,
        fontWeight: "bold",
    }, 
    questionFire: {
        fontSize: 25,
        paddingTop: 20,
    },
    selectButtons: {
        flexDirection: "row",
    }, 
    button: {
        fontSize: 18,
        paddingHorizontal: 20,
    }
})