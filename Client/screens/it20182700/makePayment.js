import React from "react";
import {useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";


const App = () => {
    const route = useRoute();
    return (
        <View style={styles.container}>
        <View style={styles.box1}>
        <Text>Student : {route.params.stud.student_name}</Text>
        <Text>NIC         : {route.params.stud.nic}</Text>
        <Text>Batch     : {route.params.stud.student_name}</Text>
        <Text>Year       : {route.params.stud.student_name}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    },
    maintext: {
    fontSize: 16,
    margin: 20,
    },
    box1: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    height: 100,
    width: 300,
    overflow: 'hidden',
    // borderRadius: 30,
    backgroundColor: '#ccc'
    }
})

export default App;