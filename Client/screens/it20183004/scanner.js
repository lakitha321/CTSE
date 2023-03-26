import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Alert,TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

export default function App() {
  const route = useRoute();
  const [permission, setPermission] = useState(null);
  const [scan, setScan] = useState(false);
  const [text, setText] = useState('Not yet scan')

  const [student, setStudent] = useState(null);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === 'granted');
    })()
  }

  const getStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://ctse-node-server.herokuapp.com/students/get/${id}`,
      );
      setStudent(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const confirmAttendance = async () => {

    const newAttendance = {
        sid: student._id,
        batch: student.batch,
        class_: "#",
        name: student.student_name,
        nic: student.nic  
    }
    await axios.post('https://ctse-node-server.herokuapp.com/attendance/upload', newAttendance)
    .then(response => {
      Alert.alert(response.data);
      if(response.data === 'Saved'){
      sendMail();
      }
    })
    .catch(error => {
      Alert.alert(error);
    });
  }; 

  const sendMail = async () => {
    const newMail = {
      p_email: student.parent_email,
      s_email: student.student_email,
      name: student.student_name
    }
    await axios.post('http://ctse-node-server.herokuapp.com/mailSend', newMail)
    .then(response => {
      if(response.data === 'Email sent'){
        Alert.alert('Mail Sent!');
      }
    })
    .catch(error => {
      Alert.alert(error);
    });
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanner = ({ type, data }) => {
    setScan(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  if (permission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (permission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scan ? undefined : handleBarCodeScanner}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scan && 
      <>
      <TouchableOpacity style={styles.buttonTap} onPress={() => setScan(false)}>
        <Text style={styles.buttonText}>Tap to Scan</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.buttonMark} onPress={() => getStudent(text)}>
        <Text style={styles.buttonText}>Mark Attendance</Text>
      </TouchableOpacity>
      {student &&
      <>
        <Text style={styles.maintext}>Student Name : {student.student_name}</Text>
        <Text style={styles.maintext}>Student NIC : {student.nic}</Text>
        <Text style={styles.maintext}>Student Batch : {student.batch}</Text>
        <TouchableOpacity style={styles.buttonconfirm} onPress={() => confirmAttendance()}>
        <Text style={styles.buttonText}>Confirm Attendance</Text>
        </TouchableOpacity>
      </>
      }
      </>
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 5,
    fontWeight : 'bold'
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'blue'
  },
  buttonconfirm: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    alignSelf: 'center'
  },
  buttonMark: {
    backgroundColor: '#2c80ec',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    alignSelf: 'center'
  },
  buttonTap: {
    backgroundColor: 'black',
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
});