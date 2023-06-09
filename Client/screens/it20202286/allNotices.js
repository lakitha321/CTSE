import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Button, Alert, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const CARD_WIDTH = 100;
const CARD_HEIGHT = 150;

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
        'Are you sure you want to delete this Notice?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              deleteNotice(id);
            },
          },
        ],
    );
  };
  
  const deleteNotice = async (id) => {
    await axios.delete(`https://ctse-node-server.herokuapp.com/notices/delete/${id}`).then((res) => {
        Alert.alert(res.data.status);
        refreshContent();
    }).catch((err) => {
        alert(err);
    })
  }

  const refreshContent = async () => {
    async function getData(){
      await axios.get(`https://ctse-node-server.herokuapp.com/notices/getAll`).then((res) => {
          setData(res.data);
      }).catch((err) => {
          alert(err);
      })
  }
  getData();
  };
  
  const handleEdit = (id, title, desc, type, batch) => {
    navigation.navigate('EditNotice', {
      id, title, desc, type, batch
    })
  }

  const onRefreshState = () => {
    setRefresfIconState(true);
    refreshContent();
    setRefresfIconState(false);
  }

  return (
    <>
    <View style={styles.container2}>
    <Text style={styles.title2}>Notices</Text>
        <SafeAreaView style={styles.safe}>
        <TextInput
        placeholder="Search by Title"
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
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.desc}>Type : {card.type}</Text>
              <Text style={styles.desc}>Description : {card.description}</Text>
              <Text style={styles.desc}>Batch : {card.year}</Text>
              <Text style={styles.desc}>Posted Date : {card.date}</Text>
              <Text style={styles.desc}>Posted Time : {card.time}</Text>
              
              <View
              style={{
                  flexDirection: 'row'
              }}>
              <TouchableOpacity
              onPress={() => handleEdit(card._id, card.title, card.description, card.type, card.year)}
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
          if(card.title.toLowerCase().includes(search.toLowerCase())){
        return(
          <TouchableOpacity key={card._id}>
            <View key={card._id} style={styles.card2}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.desc}>Type : {card.type}</Text>
              <Text style={styles.desc}>Description : {card.description}</Text>
              <Text style={styles.desc}>Batch : {card.year}</Text>
              <Text style={styles.desc}>Posted Date : {card.date}</Text>
              <Text style={styles.desc}>Posted Time : {card.time}</Text>
              
              <View
              style={{
                  flexDirection: 'row'
              }}>
              <TouchableOpacity
              onPress={() => handleEdit(card._id, card.title, card.description, card.type, card.year)}
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
    marginLeft:20,
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
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#03BCF3'
},
profileText2: {
    fontSize: 16
},
desc: {
  // fontWeight: 'bold',
  marginLeft: 20,
  fontSize: 13,
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
    fontWeight: 'bold',
  },
  
  card2: {
    marginLeft:5,
    marginTop:10,
    height: CARD_HEIGHT,
    marginRight: 10,
    backgroundColor: '#C7CCCE',
    borderRadius: 10,
    shadowColor: 'black',
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
