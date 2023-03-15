import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";


const App = () => {

  return(
    <>
    <View>
      <Text style={styles.headertext}>KAVEESHA</Text>
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