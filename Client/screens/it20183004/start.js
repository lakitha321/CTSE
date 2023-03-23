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
      <Text style={styles.headertext}>KAVEESHA</Text>
      <Pressable  onPress={()=>{navigation.navigate('AttendanceForm')}}>
        <View >
        
        </View>
        <Text >Attendance Form</Text>
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