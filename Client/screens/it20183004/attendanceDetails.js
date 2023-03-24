import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import {useRoute} from '@react-navigation/native';


const App = ({}) => {
  const route = useRoute();

  // const UpdateAttendance = {
  //   sid: student._id,
  //   batch: 'tempbatch',
  //   class_: 'Grade 12',
  //   name: student.student_name,
  //   nic: student.nic  
  // }
  // await axios.post('https://ctse-node-server.herokuapp.com/attendance/upload', newAttendance)
  // .then(response => {
  //   Alert.alert(response.data);
  // })
  // .catch(error => {
  //   Alert.alert(error);
  // });
  // }; 

  return(
    <>
    <View style={styles.container}>
    <Text style={styles.toptext1}>Attendance Details</Text>
    <View style={styles.content}>
        <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{route.params.sitem.name}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>NIC</Text>
        <Text style={styles.value}>{route.params.sitem.nic}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Batch</Text>
        <Text style={styles.value}>{route.params.sitem.batch}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Class</Text>
        <Text style={styles.value}>{route.params.sitem.class}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Year</Text>
        <Text style={styles.value}>{route.params.sitem.year}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Month</Text>
        <Text style={styles.value}>{route.params.sitem.month}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Day</Text>
        <Text style={styles.value}>{route.params.sitem.day}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{route.params.sitem.time}</Text>
        </View>
        {/* <View>
        <Button 
        title={'Edit Attendance'}
        onPress={() => UpdateAttendance()}
        style={styles.button}/>
        </View> */}
        <TouchableOpacity style={styles.button} onPress={() => handleDelete(item._id)}>
        <Text style={styles.buttonText}>Update Details</Text>
        </TouchableOpacity>
    </View>
    </View>


    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 20,
        paddingTop: 40,
    },
    toptext1: {
        fontSize: 25,
        color: '#2c80ec',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        marginRight: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        width: 100,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    headertext: {
        fontSize: 30,
        letterSpacing: 0.25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    button: {
      backgroundColor: '#2c80ec',
      padding: 10,
      borderRadius: 5,
      marginTop: 0,
      alignSelf: 'center'
    },
  
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
})

export default App;