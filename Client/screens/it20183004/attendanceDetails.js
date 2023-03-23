import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import {useRoute} from '@react-navigation/native';


const App = ({}) => {
    const route = useRoute();

  return(
    <>
    <View>
      <Text style={styles.headertext}>{route.params.sitem.name}</Text>
      <Text style={styles.headertext}>{route.params.sitem.nic}</Text>
      <Text style={styles.headertext}>{route.params.sitem.batch}</Text>
      <Text style={styles.headertext}>{route.params.sitem.class}</Text>
      <Text style={styles.headertext}>{route.params.sitem.year}</Text>
      <Text style={styles.headertext}>{route.params.sitem.month}</Text>
      <Text style={styles.headertext}>{route.params.sitem.day}</Text>
      <Text style={styles.headertext}>{route.params.sitem.time}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  headertext: {
    fontSize: 30,
    letterSpacing: 0.25,
    color: 'black',
  }
})

export default App;