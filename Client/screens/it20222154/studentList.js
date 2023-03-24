import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button, Alert,ScrollView,setRefresh} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';



const StudentList = ({ navigation }) => {
  const route = useRoute();
  const [selectedItem, setSelectedItem] = useState(null);
  const [method, setMethod] = useState();
  const [data, setData] = useState();
  const [numColumns, setNumColumns] = useState(1);
  const [refresh, setRefresh] = useState(false);
 

  useEffect(() => {
    function getData() {
      axios
        .get(`https://ctse-node-server.herokuapp.com/students/getAll`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
    getData();
  }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    navigation.navigate('AttendanceDetails', {
      sitem: item,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
      <TouchableOpacity
        style={[styles.item, selectedItem?._id === item._id && styles.selected]}
        onPress={() => handlePress(item)}
      >
        <View style={styles.row}>
          <Text style={styles.label}>Name   :</Text>
          <Text style={styles.itemText}>{item.student_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIC     :</Text>
          <Text style={styles.itemText}>{item.nic}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Batch   :</Text>
          <Text style={styles.itemText}>{item.batch}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone   :</Text>
          <Text style={styles.itemText}>{item.student_phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email   :</Text>
          <Text style={styles.itemText}>{item.student_email}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleDelete(item._id)}>
        <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.toptext1}>Student List</Text>
        
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={numColumns}
          key={numColumns} // Add key prop and update when numColumns changes
        />
      </View>
    </View>
  );
};


const handleDelete = (id) => {
  Alert.alert(
      'Confirm',
      'Are you sure you want to delete this student?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteStudent(id);
          },
        },
      ],
  );
};

const deleteStudent = async (id) => {
  await axios.delete(`https://ctse-node-server.herokuapp.com/students/delete/${id}`).then((res) => {
      Alert.alert(res.status);
      //setRefresh(!refresh);
  }).catch((err) => {
      alert(err);
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  container2: {
    marginTop: 2,
  },
  profileText: {
    fontSize: 20
  },
  toptext: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight : 'bold'
  },  
  toptext1: {
    fontSize: 25,
    color: '#2c80ec',
    textAlign: 'center',
    marginBottom: 10,
  },
  profileText2: {
    fontSize: 16
  },
  item: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#ccc',
    margin: 10,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    width: 100,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right', // aligns the text to the right
    marginRight: 10, // adds a margin to create some space between the colon and the text
    // textAlignLast: 'justify', // aligns the last line to create a vertical line
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#2c80ec',
  },
  button: {
    backgroundColor: '#c70000',
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

export default StudentList;
