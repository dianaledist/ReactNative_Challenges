import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { useState } from 'react';
import InputAdd from '../Components/InputAdd';
import Header from '../Components/Header';
import ListaTodo from '../Components/ListaTodo';
import CustomModal from '../Components/CustomModal';
import meshgradient from '../assets/mesh.jpg'

const Layout = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoSelected, setTodoSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, { id: Date.now(), todo: input, completed:false }]);
        }
    }

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }
    

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <InputAdd handleAdd={handleAdd}/>
                <ListaTodo handleModal={handleModal} todoList={todoList}/>
                <CustomModal
                    modalVisible={modalVisible}
                    setModalVisible = {setModalVisible}
                    todoList={todoList}
                    todoSelected = {todoSelected} 
                    handleDelete = {handleDelete}
                />
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%",
        justifyContent: 'center',
    },
    content: {
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
    }
})