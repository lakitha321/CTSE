import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const StylishSelection = ({navigation}) => {
  const route = useRoute();
  const [selectedItem, setSelectedItem] = useState(null);
  const [method, setMethod] = useState();
  const data = [
    { id: '1', name: 'Cash' },
    { id: '2', name: 'Card' },
  ];

  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.item, selectedItem?.id === item.id && styles.selected]}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const confirmPayment = async () => {
    const newPayment = {
        price: '1500',
        status: selectedItem.name,
        sid: route.params.sid,
        month: route.params.month,
        year: route.params.year
    }
    await axios.post('https://ctse-node-server.herokuapp.com/payments/upload', newPayment)
    .then(response => {
      if(response.data === 'Saved'){
        Alert.alert('Pyment successful!');
        sendMail();
      }
    })
    .catch(error => {
      Alert.alert(error);
    });
  };

  const sendMail = async () => {
    const newMail = {
      // p_email: route.params.student.parent_email,
      // s_email: route.params.student.student_email,
      p_email: 'lkthmtchl@gmail.com',
      s_email: 'lkthmtchl@gmail.com',
      price: '1500',
      month: route.params.month,
      year: route.params.year,
      name: route.params.student.student_name
    }
    await axios.post('http://ctse-node-server.herokuapp.com/sendmail', newMail)
    .then(response => {
      if(response.data === 'Email sent'){
        Alert.alert('Mail Sent!');
      }
      navigation.goBack()
    })
    .catch(error => {
      Alert.alert(error);
    });
  };

  return (
    <>
    <View style={styles.container}>
    <View style={styles.container2}>
    <Text style={styles.profileText2}>Year  : {route.params.month}</Text>
    <Text style={styles.profileText2}>Month : {route.params.year}</Text>
    <Text></Text>
    <Text></Text>
    <Text style={styles.profileText}>Select the Payment Method</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
    <View>
    <Text></Text>
    {selectedItem &&
    <Button title={'Confirm Payment'}
    onPress={() => confirmPayment()}
    color='green' />
    }
    </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  container2: {
    marginTop:150
  },
  profileText: {
    fontSize: 20
},
profileText2: {
    fontSize: 16
},
  item: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ccc',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#2c80ec',
  },
});

export default StylishSelection;
