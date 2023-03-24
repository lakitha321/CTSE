import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App({navigation}) {

  const handleButton1Press = () => {
    navigation.navigate('Home');
  };

  const handleButton2Press = () => {
    navigation.navigate('Staff');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleButton1Press}
      >
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        onPress={handleButton2Press}
      >
        <Text style={styles.buttonText}>Staff</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonPressed: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
