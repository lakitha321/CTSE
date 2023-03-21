import React from "react";
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet,
  View,
  Text
} from "react-native";


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <QRCode
        value="Hi im lakitha"
        size={200}
        bgColor="#000"
        fgColor="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    maintext: {
    fontSize: 16,
    margin: 20,
    },
    barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: '#fff'
    }
})

export default App;