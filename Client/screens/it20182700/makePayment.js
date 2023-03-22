import React, { useState, useEffect } from 'react';
import {useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  Pressable
} from "react-native";


const App = () => {

    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear)

    const route = useRoute();
    return (
        <View style={styles.container}>
        <View style={styles.box1}>
        <Text style={styles.profileText}>Student : {route.params.stud.student_name}</Text>
        <Text style={styles.profileText}>NIC         : {route.params.stud.nic}</Text>
        <Text style={styles.profileText}>Batch     : {route.params.stud.student_name}</Text>
        <Text style={styles.profileText}>Year       : {route.params.stud.student_name}</Text>
        </View>
        <Text style={styles.profileText}>{year}</Text>
        <View
        style={{
            flexDirection: 'row',
            height: 80,
            padding: 20,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => setYear(2020)}>
        <Text style={styles.buttonText}>2020</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setYear(2021)}>
        <Text style={styles.buttonText}>2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setYear(2022)}>
        <Text style={styles.buttonText}>2022</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setYear(2023)}>
        <Text style={styles.buttonText}>2023</Text>
        </TouchableOpacity>
        </View>
        <ScrollView >
            <Pressable style={styles.subbutton} >
                <View>
                <View>
                    <Text style={styles.text}>JANUARY</Text>
                    <Text style={styles.text}>Order Date : </Text>
                    <Text style={styles.text}>Scheduled Time : </Text>
                    <Text style={styles.text}>Order Status : </Text>
                </View>
                </View>
            </Pressable>
      </ScrollView>
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
    backgroundColor: '#fff'
    },
    button: {
        marginRight: 5,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    },
    profileText: {
        fontSize: 16
    },
    subbutton: {
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#0a3b79',
        borderRadius: 20,
        opacity: 0.90
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff'
    },
})

export default App;