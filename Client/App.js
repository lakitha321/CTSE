import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Start1 from './screens/it20182700/start';
import Start2 from './screens/it20183004/start';
import Start3 from './screens/it20202286/start';
import Start4 from './screens/it20222154/start';

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
        <Stack.Screen name="Start2" component={Start2} />
        <Stack.Screen name="Start3" component={Start3} />
        <Stack.Screen name="Start4" component={Start4} />
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