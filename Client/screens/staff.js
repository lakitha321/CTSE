import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CARD_WIDTH = 150;
const CARD_HEIGHT = 200;

const HorizontalScrollCards = ({navigation}) => {

  return (
    <>
    <View style={styles.container2}>
        <Text></Text>
    <Text style={styles.title2}>Tap to Go</Text>
    <Text></Text>
      <ScrollView>
      <Text></Text>
        <View
        style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
            <View style={styles.card}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.title}>Student</Text>
            <Image source={require('../assets/addStudent.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('AddNotice')}}>
            <View style={styles.card}>
            <Text style={styles.title}>View</Text>
            <Text style={styles.title}>Students</Text>
            <Image source={require('../assets/profile.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        </View>
        <Text></Text>
        <View
        style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={() => {navigation.navigate('AddNotice')}}>
            <View style={styles.card}>
                <Text style={styles.title}>Write</Text>
                <Text style={styles.title}>Notice</Text>
                <Image source={require('../assets/write.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('AddNotice')}}>
            <View style={styles.card}>
            <Text style={styles.title}>View</Text>
            <Text style={styles.title}>Notices</Text>
            <Image source={require('../assets/note.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        </View>
        <Text></Text>
        <View
        style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={() => {navigation.navigate('AddNotice')}}>
            <View style={styles.card}>
                <Text style={styles.title}>Mark</Text>
                <Text style={styles.title}>Attendance</Text>
                <Image source={require('../assets/attendance.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('AddNotice')}}>
            <View style={styles.card}>
            <Text style={styles.title}>View</Text>
            <Text style={styles.title}>Attendance</Text>
            <Image source={require('../assets/att.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        </View>
        <Text></Text>
        <View
        style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={() => {navigation.navigate('Scanner')}}>
            <View style={styles.card}>
            <Text style={styles.title}>Make</Text>
            <Text style={styles.title}>Payment</Text>
            <Image source={require('../assets/pay.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('AllPayments')}}>
            <View style={styles.card}>
            <Text style={styles.title}>View</Text>
            <Text style={styles.title}>Payments</Text>
            <Image source={require('../assets/payment.png')} style={styles.image} />
            </View>
        </TouchableOpacity>
        </View>
        <Text></Text>
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
    flex: 1,
    // marginTop: 10,
    // marginLeft:10
    justifyContent:'center',
    alignItems: 'center'
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
    width:50,
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
    marginTop:10,
    marginLeft:20,
    width: CARD_WIDTH * 0.7,
    height: CARD_HEIGHT * 0.5,
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
