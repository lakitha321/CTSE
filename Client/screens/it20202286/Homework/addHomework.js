import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';
import RoundIconBtn from './RoundIconBtn';

const AddHomework = () => {
  const [homeworkTitle, setHomeworkTitle] = useState('');
  const [homeworkDec, setHomeworkDec] = useState('');
  
//   const [registeredDate, setRegisteredDate] = useState('');
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

    const newHomework = {
        homework_title: homeworkTitle,
        homework_dec: homeworkDec,
       
        batch: batch
    }

    const closeModal = () => {
        if (!isEdit) {
          setTitle('');
          setDesc('');
        }
        onClose();
      };


    await axios.post('https://ctse-node-server.herokuapp.com/homework/upload', newHomework)
    .then(response => {
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert('Homework creation Failed', ' Homework creation failed. Please try again.');
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={homeworkTitle}
        onChangeText={setHomeworkTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={homeworkDec}
        onChangeText={setHomeworkDec}
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

     
      {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity> */}

      <View style={styles.btnContainer}>
            <RoundIconBtn
              size={15}
              antIconName='check'
              onPress={handleSubmit}
            />
          </View>

 

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
btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },

});

export default AddHomework;


