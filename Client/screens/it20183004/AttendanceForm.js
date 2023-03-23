import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity,Button, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const AttendanceForm = () => {
  const [studentId, setStudentId] = useState('');
  const [batch, setBatch] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async () => {
    
    const newAttendance = {
      sid: studentId,
      batch: batch,
      class: section,
      year: year,
      month: month,
      day: date,
      time: time,
  }
  console.log('before');
  await axios.post('https://ctse-node-server.herokuapp.com/attendance/upload', newAttendance)
  .then(response => {
    Alert.alert(response.data);
    console.log('after');
    
  })
  .catch(error => {
    Alert.alert('Attendance Marking Failed', 'Attendance Marking Failed.Please try again.');
  });
  };

  return (
    <View style={styles.container}>
       <ScrollView>
      <Text style={styles.label}>Student ID:</Text>
      <TextInput
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
      />
      <Text style={styles.label}>Batch:</Text>
      <TextInput
        style={styles.input}
        value={batch}
        onChangeText={setBatch}
      />
      <Text style={styles.label}>Section:</Text>
      <TextInput
        style={styles.input}
        value={section}
        onChangeText={setSection}
      />
      <Text style={styles.label}>Year:</Text>
      <TextInput
        style={styles.input}
        value={year}
        onChangeText={setYear}
      />
      <Text style={styles.label}>Month:</Text>
      <TextInput
        style={styles.input}
        value={month}
        onChangeText={setMonth}
      />
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <Text style={styles.label}>Time:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />
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
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AttendanceForm;
