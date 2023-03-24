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
import ViewPay from './screens/it20182700/viewPayment';

import Start2 from './screens/it20183004/start';
import AttendanceScanner from './screens/it20183004/scanner';
import AllAttendances from './screens/it20183004/allAttendances';
import AttendanceDetails from './screens/it20183004/attendanceDetails';

// import Start3 from './screens/it20202286/Homework/addHomework';
import Notices from './screens/it20202286/Notices/addNotice';
import Homework from './screens/it20202286/Homework/addHomework';
import AllNotices from './screens/it20202286/Notices/allNotices';
import HomeworkList from './screens/it20202286/Homework/homeworkList';

import Start4 from './screens/it20222154/start';
import Register from './screens/it20222154/registration';




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
        <Stack.Screen name="ViewPay" component={ViewPay} />

        <Stack.Screen name="Start2" component={Start2} />
        <Stack.Screen name="AttendanceScanner" component={AttendanceScanner} />
        <Stack.Screen name="AllAttendances" component={AllAttendances} />
        <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} />

        {/* <Stack.Screen name="Start3" component={Start3} /> */}
        <Stack.Screen name="Notices" component={Notices} />
        <Stack.Screen name="Homework" component={Homework} />
        <Stack.Screen name="AllNotices" component={AllNotices} />
        <Stack.Screen name="HomeworkList" component={HomeworkList} />

        <Stack.Screen name="Start4" component={Start4} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AttendanceScanner" component={AttendanceScanner} />
       
        

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
