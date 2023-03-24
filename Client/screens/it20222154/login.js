import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    console.log("hi");
    super(props);
    this.state = {
      student_email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
  }

  validate = () => {
    let emailError = '';
    let passwordError = '';

    // check for email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.state. student_email)) {
      emailError = 'Invalid email format';
    }

    // check for empty password field
    if (!this.state.password) {
      passwordError = 'Password cannot be empty';
    }

    // set error messages to state if any
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

//   login = async () => {
//     if (this.validate()) {
//       try {
//         const response = await axios.post('http://localhost:5000/student/login', {
//           student_email: this.state.student_email,
//           password: this.state.password
//         });
//         if (response.status === 200) {
//           // navigate to the next screen on successful login
//           this.props.navigation.navigate('Home');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(student_email) => this.setState({  student_email })}
        />
        <Text style={styles.error}>{this.state.emailError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />
        <Text style={styles.error}>{this.state.passwordError}</Text>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

export default Login;
