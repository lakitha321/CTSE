import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';

import Start1 from './screens/it20182700/start';
import Scanner from './screens/it20182700/scanner';
import QRCode from './screens/it20182700/sample_qr_gen';
import MakePayment from './screens/it20182700/makePayment';
import AllPayments from './screens/it20182700/allPayments';
import SubmitPayment from './screens/it20182700/paymentSubmit';
import AttendanceScanner from './screens/it20183004/scanner';
import Start2 from './screens/it20183004/start';


import Start3 from './screens/it20202286/Homework/addHomework';

import Start4 from './screens/it20222154/start';
import Register from './screens/it20222154/registration';
import Notices from './screens/it20202286/Notices/addNotice';
import Homework from './screens/it20202286/Homework/addHomework'



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen name="Start1" component={Start1} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="MakePayment" component={MakePayment} />
        <Stack.Screen name="AllPayments" component={AllPayments} />
        <Stack.Screen name="SubmitPayment" component={SubmitPayment} />

        <Stack.Screen name="Start2" component={Start2} />

        <Stack.Screen name="Start3" component={Start3} />

        <Stack.Screen name="Start4" component={Start4} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AttendanceScanner" component={AttendanceScanner} />
        <Stack.Screen name="Notice" component={Notices}/>
        <Stack.Screen name="Homework"  component={Homework}/>
        

      </Stack.Navigator>
 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
