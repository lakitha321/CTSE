import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const HomeworkList = ({navigation}) => {
  const route = useRoute();
  const [selectedItem, setSelectedItem] = useState(null);
  const [method, setMethod] = useState();
  const [data, setData] = useState();

    useEffect(() => {
        function getData(){
            axios.get(`https://ctse-node-server.herokuapp.com/notices/getAll`).then((res) => {
                setData(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getData();
    }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    // navigation.navigate('AttendanceDetails',{
    //   sitem:item
    // });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.item, selectedItem?._id === item._id && styles.selected]}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.nic}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
    <View style={styles.container}>
    <View style={styles.container2}>
    <Text></Text>
    <Text></Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
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

export default HomeworkList;
