import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

export default function App() {
  const route = useRoute();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const [student, setStudent] = useState(null);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  const getStudent = async (id) => {
    try {
      const response = await axios.get(
        `https://ctse-node-server.herokuapp.com/students/get/${id}`,
      );
      setStudent(response.data);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };
  //confirming attendance
  const confirmAttendance = async () => {

    // var tempbatch = student.batch;
    // if (!student.batch) {
    //   tempbatch = 'batch';
    // }

    const newAttendance = {
        sid: student._id,
        batch: 'tempbatch',
        class_: 'give val',
      
    }
    await axios.post('https://ctse-node-server.herokuapp.com/attendance/upload', newAttendance)
    .then(response => {
      Alert.alert(response.data);
    })
    .catch(error => {
      Alert.alert(error);
    });
  }; 

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && 
      <>
      <Button title={'Tap to Scan'} onPress={() => setScanned(false)} color='blue' />
      <Text></Text>
      <Button title={'Mark Attendance'} onPress={() => getStudent(text)} color='blue' />
      {student &&
      <>
        <Text style={styles.maintext}>{student.student_name}</Text>
        <Text style={styles.maintext}>{student.nic}</Text>
        <Text style={styles.maintext}>{student.batch}</Text>
        <View>
        <Button title={'Confirm Attendance'}
        onPress={() => confirmAttendance()}
        color='green'/>
        </View>
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
});