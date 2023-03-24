import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from "react-native";


const App = ({navigation}) => {

  return(
    <>
    <View>
      <Text style={styles.headertext}>SANDUNI</Text>
      <Pressable  onPress={()=>{navigation.navigate('Register')}}>
        <View >
        
        </View>
        <Text >Registration form</Text>
        </Pressable>

        <Pressable  onPress={()=>{navigation.navigate('Login')}}>
        <View >
        
        </View>
        <Text >Login</Text>
        </Pressable>
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