import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Layout from './Screens/Layout';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>¡¡Hola, Coder!! ✨</Text>

      <Image
          style={{ width: 200, height: 200, marginTop: 15 }}
          source={require("./cat.jpg")}
        />

        
  
      <StatusBar style="auto" />
      
      <Layout/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
