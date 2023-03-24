import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [button1Pressed, setButton1Pressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);

  const handleButton1Press = () => {
    setButton1Pressed(!button1Pressed);
  };

  const handleButton2Press = () => {
    setButton2Pressed(!button2Pressed);
  };

  const handleButton3Press = () => {
    setButton3Pressed(!button3Pressed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, button1Pressed && styles.buttonPressed]}
        onPress={handleButton1Press}
      >
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, button2Pressed && styles.buttonPressed]}
        onPress={handleButton2Press}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, button3Pressed && styles.buttonPressed]}
        onPress={handleButton3Press}
      >
        <Text style={styles.buttonText}>Button 3</Text>
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
    color: 'white',
    fontWeight: 'bold',
  },
});
