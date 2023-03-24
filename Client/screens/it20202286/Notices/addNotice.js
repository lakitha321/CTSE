import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';

const RegistrationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [classDay, setClassDay] = useState('');
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
        student_name: date,
        parent_name: time,
        student_phone: title,
        parent_phone: description,
        classDay: classDay,
        batch: batch
    }
    await axios.post('https://ctse-node-server.herokuapp.com/notices/upload', newStudent)
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
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Parent Name</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Student Phone</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        keyboardType='phone-pad'
      />

      <Text style={styles.label}>Parent Phone</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        keyboardType='phone-pad'
      />

      <Text style={styles.label}>classDay</Text>
      <TextInput
        style={styles.input}
        value={classDay}
        onChangeText={setClassDay}
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
