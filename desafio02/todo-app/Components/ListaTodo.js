import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../styles/Colors'
import ListaTodoItem from './ListaTodoItem'

const ListaTodo = ({handleModal, todoList}) => {

    const renderTodo = ({ item }) => <ListaTodoItem onPress={handleModal} todo={item}></ListaTodoItem>
    /* const [count, setCount] = React.useState(0); */

  return (
    <View style={styles.itemList}>
            {todoList.length !== 0 && (
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
             
                />
            )}
               {/*  <Text>Tienes {count} items</Text> */}
            {todoList.length === 0 && <Text style= {styles.comment}>No hay tareas pendientes 😅</Text>}
             
        </View>
  )
}

export default ListaTodo

const styles = StyleSheet.create({
    itemList: {
        height: 450,
        marginLeft:20,
        marginRight:20,
        width: 360,
    },
    comment: {
        fontSize: 15,
        paddingTop:20,
    }
})