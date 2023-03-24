import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import {useRoute} from '@react-navigation/native';


const App = ({navigation}) => {
  const route = useRoute();

  const [name, setname] = useState(route.params.logged.student_name);
  const [nic, setnic] = useState(route.params.logged.nic);
  const [phone, setphone] = useState(route.params.logged.student_phone);
  const [email, setemail] = useState(route.params.logged.student_email);

  const [student, setstudent] = useState();

  const handleSubmit = async () => {

    const editStudent = {
        student_name: name,
        student_phone: phone,
        nic: nic,
        student_email: email
    }
    await axios.put(`https://ctse-node-server.herokuapp.com/students/edit/${route.params.logged._id}`, editStudent)
    .then(response => {
        navigation.goBack();
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert('Registration Failed', 'Student registration failed. Please try again.');
    });
  };

    useEffect(() => {
        async function getStu(){
            await axios.get(`https://ctse-node-server.herokuapp.com/students/get/${route.params.logged._id}`).then((res) => {
                setstudent(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getStu();
    }, []);

  return(
    <>
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.toptext1}>Student Details</Text>
    { student &&
    <View style={styles.content}>
        <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <TextInput
            style={styles.input}
            defaultValue={student.student_name}
            onChangeText={setname}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>NIC</Text>
        <TextInput
            style={styles.input}
            defaultValue={student.nic}
            onChangeText={setnic}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
            style={styles.input}
            defaultValue={student.student_phone}
            onChangeText={setphone}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            defaultValue={student.student_email}
            onChangeText={setemail}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Batch</Text>
        <Text style={styles.value}>{student.batch}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Registered Date</Text>
        <Text style={styles.value}>{student.registered_date}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Name</Text>
        <Text style={styles.value}>{student.parent_name}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Email</Text>
        <Text style={styles.value}>{student.parent_email}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Phone</Text>
        <Text style={styles.value}>{student.parent_phone}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Update Details</Text>
        </TouchableOpacity>
    </View>
    }
    </View>
    </ScrollView>

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
        color: '#000',
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
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
      }
})

export default App;