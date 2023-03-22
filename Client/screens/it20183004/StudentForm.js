import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

const StudentForm = () => {
  const [studentId, setStudentId] = useState('');
  const [batch, setBatch] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    // handle form submission here
  };

  return (
    <ScrollView>
    <View style={styles.container}>
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </ScrollView>
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
});

export default StudentForm;
