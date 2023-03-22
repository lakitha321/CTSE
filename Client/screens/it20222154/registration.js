import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';

const RegistrationForm = () => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [nic, setNIC] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredDate, setRegisteredDate] = useState('');
  const [batch, setBatch] = useState('A/L2023');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setRegisteredDate(date.toISOString());
    hideDatePicker();
  };

  const handleSubmit = async () => {

    const newStudent = {
        student_name: studentName,
        parent_name: parentName,
        student_phone: studentPhone,
        parent_phone: parentPhone,
        nic: nic,
        student_email: studentEmail,
        parent_email: parentEmail,
        password: password,
        batch: batch
    }
    await axios.post('https://ctse-node-server.herokuapp.com/students/upload', newStudent)
    .then(response => {
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert('Registration Failed', 'Student registration failed. Please try again.');
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.label}>Student Name</Text>
      <TextInput
        style={styles.input}
        value={studentName}
        onChangeText={setStudentName}
      />

      <Text style={styles.label}>Parent Name</Text>
      <TextInput
        style={styles.input}
        value={parentName}
        onChangeText={setParentName}
      />

      <Text style={styles.label}>Student Phone</Text>
      <TextInput
        style={styles.input}
        value={studentPhone}
        onChangeText={setStudentPhone}
        keyboardType='phone-pad'
      />

      <Text style={styles.label}>Parent Phone</Text>
      <TextInput
        style={styles.input}
        value={parentPhone}
        onChangeText={setParentPhone}
        keyboardType='phone-pad'
      />

      <Text style={styles.label}>NIC</Text>
      <TextInput
        style={styles.input}
        value={nic}
        onChangeText={setNIC}
      />

      <Text style={styles.label}>Student Email</Text>
      <TextInput
        style={styles.input}
        value={studentEmail}
        onChangeText={setStudentEmail}
        keyboardType='email-address'
      />

      <Text style={styles.label}>Parent Email</Text>
      <TextInput
        style={styles.input}
        value={parentEmail}
        onChangeText={setParentEmail}
        keyboardType='email-address'
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Batch : {batch}</Text>
      <View
      style={{
          flexDirection: 'row',
          height: 80,
          padding: 20,
      }}>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('A/L2023')}>
      <Text style={styles.button2Text}>A/L2023</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('A/L2024')}>
      <Text style={styles.button2Text}>A/L2024</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('A/L2025')}>
      <Text style={styles.button2Text}>A/L2025</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.label}>Registered Date: {registeredDate ? registeredDate: 'Select a date'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
  </ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
},
label: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 10,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
fontSize: 18,
marginTop: 5,
marginBottom: 10,
},
button: {
backgroundColor: '#008080',
padding: 10,
borderRadius: 5,
marginTop: 20,
},
button2: {
  marginRight: 5,
  backgroundColor: 'black',
  padding: 10,
  borderRadius: 5,
},
button2Text: {
color: 'white',
fontSize: 16,
textAlign: 'center',
},
buttonText: {
color: '#fff',
fontSize: 18,
textAlign: 'center',
},
});

export default RegistrationForm;
