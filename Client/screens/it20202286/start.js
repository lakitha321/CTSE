import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleButton1Press = () => {
    navigation.navigate('Notices');
  };

  const handleButton2Press = () => {
    navigation.navigate('Homework');
  };

  const handleButton3Press = () => {
    navigation.navigate('AllNotices');
  };

  const handleButton4Press = () => {
    navigation.navigate('AllNotices');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
        <Text style={styles.buttonText}>Add Notice</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
        <Text style={styles.buttonText}>Add Homework</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton3Press}>
        <Text style={styles.buttonText}>View Notices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton4Press}>
        <Text style={styles.buttonText}>View Homework</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
