import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';

const Form = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [type, setType] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = async () => {

     // Validation

     if (!title || title.length > 20) {
      Alert.alert('Error', 'Title should have at least 1 character and no more than 20 characters');
      return;
    }

     if (!desc || desc.length > 200) {
      Alert.alert('Error', 'Description should have at least 1 character and no more than 200 characters');
      return;
    }
  
    if (!type) {
      Alert.alert('Error', 'Please select a type');
      return;
    }
  
    if (!batch) {
      Alert.alert('Error', 'Please select a batch');
      return;
    }

    const newNotice = {
        type,
        title,
        description: desc,
        year: batch,
        class_: 'temp'
    }
    await axios.post('https://ctse-node-server.herokuapp.com/notices/upload', newNotice)
    .then(response => {
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert('Registration Failed', 'Student registration failed. Please try again.');
    });


  };


const handleInputChange = (name, value) => {
  setFormData({ ...formData, [name]: value });
};

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.label}>Type : {type}</Text>
      <View
      style={{
          flexDirection: 'row',
          height: 80,
          padding: 20,
      }}>
      <TouchableOpacity style={styles.button2} onPress={() => setType('notice')}>
      <Text style={styles.button2Text}>Notice</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setType('work')}>
      <Text style={styles.button2Text}>Homework</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.label}>Enter a Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={settitle}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input2}
        value={desc}
        onChangeText={setdesc}
      />
            <Text style={styles.label}>Batch : {batch}</Text>
      <View
      style={{
          flexDirection: 'row',
          height: 80,
          padding: 20,
      }}>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('AL2023')}>
      <Text style={styles.button2Text}>A/L2023</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('AL2024')}>
      <Text style={styles.button2Text}>A/L2024</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => setBatch('AL2025')}>
      <Text style={styles.button2Text}>A/L2025</Text>
      </TouchableOpacity>
      </View>
      {title && desc && type && batch &&
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      }
  </ScrollView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
// justifyContent: 'center',
// alignItems: 'center'
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
input2: {
    height:130,
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

export default Form;
