import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import {useRoute} from '@react-navigation/native';


const App = ({}) => {
  const route = useRoute();

  return(
    <>
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.toptext1}>Student Details</Text>
    <View style={styles.content}>
        <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <TextInput
            style={styles.input}
            defaultValue={route.params.logged.student_name}
            // onChangeText={onChangeText}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>NIC</Text>
        <TextInput
            style={styles.input}
            defaultValue={route.params.logged.nic}
            // onChangeText={onChangeText}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
            style={styles.input}
            defaultValue={route.params.logged.student_phone}
            // onChangeText={onChangeText}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            defaultValue={route.params.logged.student_email}
            // onChangeText={onChangeText}
        />
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Batch</Text>
        <Text style={styles.value}>{route.params.logged.batch}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Registered Date</Text>
        <Text style={styles.value}>{route.params.logged.registered_date}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Name</Text>
        <Text style={styles.value}>{route.params.logged.parent_name}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Email</Text>
        <Text style={styles.value}>{route.params.logged.parent_email}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Parent Phone</Text>
        <Text style={styles.value}>{route.params.logged.parent_phone}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleDelete(item._id)}>
        <Text style={styles.buttonText}>Update Details</Text>
        </TouchableOpacity>
    </View>
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