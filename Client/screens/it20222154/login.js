import React, {useEffect, useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default App = ({navigation}) => {

  const adminMail = 'admin@gmail.com';
  const adminPass = 'admin';
  
  const [email, setemail] = useState([]);
  const [pass, setpass] = useState([]);

  const login = async () => {
    if(adminMail === email && adminPass === pass){
      navigation.navigate('Staff');
    }
    else{
    try {
      const response = await axios.post(`https://ctse-node-server.herokuapp.com/students/log/${email}`, {
        password: pass
      });
      if (response.data.status) {
        navigation.navigate('Home',{
          logged:response.data.details
        });
        Alert.alert('Logged Successfuly');
      }
    } catch (error) {
      console.log(response.data);
    }
  }
  };

  // render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setemail}
        />
        {/* <Text style={styles.error}>{this.state.emailError}</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setpass}
          secureTextEntry
        />
        {/* <Text style={styles.error}>{this.state.passwordError}</Text> */}
        <TouchableOpacity style={styles.button} onPress={() => {login()}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 32,
    marginBottom: 32
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 16
  },
  error: {
    color: 'red',
    marginBottom: 16
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

