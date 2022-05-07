import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import React from 'react'
import { colors } from '../styles/Colors'

const ListaTodoItem = ({todo, onPress}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.itemContainer} >
        {/* <TouchableOpacity >
            <Text style = {styles.text}>🟣</Text>
        </TouchableOpacity> */}
        
        <TouchableOpacity >
            <Text style = {styles.text}>🟣   {todo.todo}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>onPress(todo)}>
          <Text>❌</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ListaTodoItem

const styles = StyleSheet.create({
  container: {
    borderColor: colors.purple,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    height: 50,
    padding: 15,
    shadowColor: colors.gray,
    shadowOffset: {
        width: -1,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  }
})