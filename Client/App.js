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

import Start2 from './screens/it20183004/start';

import Start3 from './screens/it20202286/Homework/Screens/Intro';

import Start4 from './screens/it20222154/start';

import NoteDetail from './screens/it20202286/Homework/components/HomeworkDetails';

import NoteScreen from './screens/it20202286/Homework/Screens/HomeworkPage';

import NoteProvider from './screens/it20202286/Homework/contexts/WorkProvider';

// import Animations from './screens/it20202286/Homework/components/Animations';


const Stack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);
  

  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;


  return (
    <NavigationContainer>
    <NoteProvider>
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

        <Stack.Screen name="Start2" component={Start2} />

        <Stack.Screen name="Start3" component={Start3} />

        <Stack.Screen name="Start4" component={Start4} />

        {/* <Stack.Screen  name="Animations" component={Animations}/> */}

       
      
            <Stack.Screen name="NoteDetail" component={NoteDetail}/>

            <Stack.Screen name="NoteScreen" component={renderNoteScreen}/>

  

      </Stack.Navigator>
      </NoteProvider>
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
