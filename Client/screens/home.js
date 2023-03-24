import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CARD_WIDTH = 100;
const CARD_HEIGHT = 100;

const cards = [
  { id: 1, image: require('../assets/profile.png'), title: 'My Profile'},
  { id: 2, image: require('../assets/QRIcon.png'), title: 'My QR'},
  { id: 3, image: require('../assets/attendance.png'), title: 'Attendance'},
  { id: 4, image: require('../assets/homework.png'), title: 'Homework'},
  { id: 5, image: require('../assets/payment.png'), title: 'Payments'},
];

const HorizontalScrollCards = ({navigation}) => {

  // const notices = [
  //   { _id: 1, title: 'notice 1'},
  //   { _id: 2, title: 'notice 2'},
  //   { _id: 3, title: 'notice 3'},
  //   { _id: 4, title: 'notice 4'},
  //   { _id: 5, title: 'notice 5'},
  // ];

    const handlePress = (id) => {
        if(id == 1)
        navigation.navigate('Start4')
        else if(id == 2)
        navigation.navigate('QRCode')
        else if(id == 3)
        navigation.navigate('Start2')
        else if(id == 4)
        navigation.navigate('Start3')
        else if(id == 5)
        navigation.navigate('Scanner')
    };

  const [notices, setData] = useState();

  useEffect(() => {
    function getData(){
        axios.get(`https://ctse-node-server.herokuapp.com/notices/getByYear/AL2023`).then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }
    getData();
  }, []);


  return (
    <>
    <View style={styles.container}>
      <ScrollView horizontal={true}>
      <View style={{ width: 10 }} />
        {cards.map(card => (
        <TouchableOpacity key={card.id} onPress={() => handlePress(card.id)}>
          <View key={card.id} style={styles.card}>
            <Image source={card.image} style={styles.image} />
            <Text style={styles.title}>{card.title}</Text>
          </View>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    <View style={styles.container2}>
    <Text style={styles.title2}>Notices</Text>
      <ScrollView>
        {notices &&
        <>
        <View style={{ width: 10 }} />
          {notices.map(card => (
          <TouchableOpacity key={card._id}>
            <View key={card._id} style={styles.card2}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.desc}>{card.description}</Text>
            </View>
          </TouchableOpacity>
          ))}
          <Text></Text>
        </>
        }
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginTop: 20,
  },
  container2: {
    flex: 0.8,
    marginTop: 10,
  },
  card: {
    width: CARD_WIDTH,
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
  image: {
    marginTop:2,
    marginLeft:13,
    width: CARD_WIDTH * 0.7,
    height: CARD_HEIGHT * 0.7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 16,
    marginTop: 2,
  },
  desc: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 12,
    marginTop: 2,
  },
  title2: {
    marginLeft:10,
    fontSize: 20,
    marginTop: 2,
  },
});

export default HorizontalScrollCards;
