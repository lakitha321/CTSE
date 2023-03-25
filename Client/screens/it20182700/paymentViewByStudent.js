import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Button, Alert, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const CARD_WIDTH = 100;
const CARD_HEIGHT = 170;

const AllNotices = ({navigation}) => {
  const route = useRoute();
  const [selectedItem, setSelectedItem] = useState(null);
  const [method, setMethod] = useState();
  const [notices, setData] = useState();

  const [search, setSearch] = useState("");

  const [refresfIconState, setRefresfIconState] = useState(false);

    useEffect(() => {
      refreshContent();
    }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    // navigation.navigate('AttendanceDetails',{
    //   sitem:item
    // });
  };

  const handleDelete = (id) => {
    Alert.alert(
        'Confirm',
        'Are you sure you want to delete this payment?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
                deletePayment(id);
            },
          },
        ],
    );
};

const handleEdit = (id, type) => {
    if(type === 'Cash'){
        Alert.alert(
            'Confirm',
            'Are you sure you want to change the payment type from Cash to Card?',
            [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => {
                    editPaymentType(id, 'Card');
                },
            },
            ],
        );
    }
    if(type === 'Card'){
        Alert.alert(
            'Confirm',
            'Are you sure you want to change the payment type from Card to Cash?',
            [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => {
                    editPaymentType(id, 'Cash');
                },
            },
            ],
        );
    }
};

const deletePayment = async (id) => {
    await axios.delete(`https://ctse-node-server.herokuapp.com/payments/delete/${id}`).then((res) => {
        Alert.alert(res.data.status);
        refreshContent();
    }).catch((err) => {
        alert(err);
    })
}

const editPaymentType = async (id, type) => {
    await axios.put(`https://ctse-node-server.herokuapp.com/payments/edit/${id}/${type}`).then((res) => {
        Alert.alert(res.data);
        refreshContent();
    }).catch((err) => {
        alert(err);
    })
}

  const refreshContent = async () => {
    async function getData(){
      await axios.get(`https://ctse-node-server.herokuapp.com/payments/getAll`).then((res) => {
          setData(res.data);
      }).catch((err) => {
          alert(err);
      })
  }
  getData();
  };

  const onRefreshState = () => {
    setRefresfIconState(true);
    refreshContent();
    setRefresfIconState(false);
  }

  return (
    <>
    <View style={styles.container2}>
    <Text style={styles.title2}>Payments</Text>
    <SafeAreaView style={styles.safe}>
        <TextInput
        placeholder="Search by Name"
          style={styles.input}
          onChangeText={setSearch}
        />
    </SafeAreaView>
    <Text></Text>
      <ScrollView refreshControl={<RefreshControl onRefresh={onRefreshState} refreshing={refresfIconState}/>}>
        {notices &&
        <>
        <View style={{ width: 10 }} />
          {notices.map(card => {
            if(search === ""){
        return(
          <TouchableOpacity key={card._id}>
            <View key={card._id} style={styles.card2}>
              <Text style={styles.title}>{card.name}</Text>
              <Text style={styles.desc}>NIC : {card.nic}</Text>
              <Text style={styles.desc}>Payed for : {card.month} / {card.year}</Text>
              <Text style={styles.desc}>Payed on : {card.date}</Text>
              <Text style={styles.desc}>Payed at : {card.time}</Text>
              <Text style={styles.desc}>Payed Amount : {card.price}</Text>
              <Text style={styles.desc}>Payment Type : {card.status}</Text>
              <View
              style={{
                  flexDirection: 'row'
              }}>
              <TouchableOpacity
              onPress={() => handleEdit(card._id, card.status)}
              >
              <Text style={styles.button2Text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => handleDelete(card._id)}
              >
              <Text style={styles.button3Text}>Delete</Text>
              </TouchableOpacity>
              </View>
              <Text></Text>
            </View>
          </TouchableOpacity>
        )}
        else if(card.name.toLowerCase().includes(search.toLowerCase())){
            return(
                <TouchableOpacity key={card._id}>
                  <View key={card._id} style={styles.card2}>
                    <Text style={styles.title}>{card.name}</Text>
                    <Text style={styles.desc}>NIC : {card.nic}</Text>
                    <Text style={styles.desc}>Payed for : {card.month} / {card.year}</Text>
                    <Text style={styles.desc}>Payed on : {card.date}</Text>
                    <Text style={styles.desc}>Payed at : {card.time}</Text>
                    <Text style={styles.desc}>Payed Amount : {card.price}</Text>
                    <Text style={styles.desc}>Payment Type : {card.status}</Text>
                    <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <TouchableOpacity
                    onPress={() => handleEdit(card._id, card.status)}
                    >
                    <Text style={styles.button2Text}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => handleDelete(card._id)}
                    >
                    <Text style={styles.button3Text}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                    <Text></Text>
                  </View>
                </TouchableOpacity>
              )
        }
        })}
          <Text></Text>
        </>
        }
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 21,
    marginTop: 10
  },
  button2Text: {
    marginLeft:250,
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button3Text: {
    marginLeft:10,
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  profileText: {
    fontSize: 20
},
title2: {
  marginLeft:10,
  fontSize: 20,
  marginTop: 2,
},
profileText2: {
    fontSize: 16
},
desc: {
  // fontWeight: 'bold',
  marginLeft: 20,
  fontSize: 12,
  marginTop: 2,
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
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 2,
  },
  card2: {
    marginLeft:5,
    marginTop:10,
    height: CARD_HEIGHT,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    height: 40,
    width:200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor:'gray'
  },
  safe:{
    alignItems:'flex-end',
    marginRight:10
  }
});

export default AllNotices;
