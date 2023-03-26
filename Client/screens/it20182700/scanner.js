import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function App({navigation}) {

  const [permission, setpermission] = useState(null);
  const [scanned, setScannedObject] = useState(false);
  const [text, setScannedText] = useState('')

  const [student, setStudent] = useState(null);

  const getCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setpermission(status === 'granted');
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

  const paymentNavigation = () => {
    navigation.navigate('MakePayment', {
      stud:student
    });
  };

  const handleBarCodeScanner = ({ type, data }) => {
    setScannedObject(true);
    setScannedText(data)
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

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
        <Button title={'Allow Camera'} onPress={() => getCameraPermission()} />
      </View>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodecontainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && 
      <>
      <Button title={'Tap to Scan'} onPress={() => setScannedObject(false)} color='black' />
      <Text></Text>
      <Button title={'Fetch Student'} onPress={() => getStudent(text)} color='black' />
      {student &&
      <>
        {student.student_name &&
        <>
        <Text style={styles.maintext}>Student Name : {student.student_name}</Text>
        <Button title={'Make Payment'} onPress={() => paymentNavigation()} color='green' />
        </>
        }
      </>
      }
      {!student &&
      <>
      <ActivityIndicator size="large" />
      </>
      }
      </>
      }
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
    margin: 20,
  },
  barcodecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'transparent'
  }
});