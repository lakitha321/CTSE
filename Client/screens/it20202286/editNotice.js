import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const Form = ({navigation}) => {

    const route = useRoute();

  const [title, settitle] = useState(route.params.title);
  const [desc, setdesc] = useState(route.params.desc);
  const [type, setType] = useState(route.params.type);
  const [batch, setBatch] = useState(route.params.batch);
  

  const handleSubmit = async () => {

    const newNotice = {
        type,
        title,
        description: desc,
        year: batch,
        class_: 'temp'
    }
    await axios.put(`https://ctse-node-server.herokuapp.com/notices/edit/${route.params.id}`, newNotice)
    .then(response => {
        navigation.goBack();
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert('Registration Failed', 'Student registration failed. Please try again.');
    });
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
        defaultValue={route.params.title}
        onChangeText={settitle}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input2}
        value={desc}
        defaultValue={route.params.desc}
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
