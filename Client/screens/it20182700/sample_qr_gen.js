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
        value="64157ce58156e34dfcd66ea0"
        size={200}
        bgColor="#000"
        fgColor="#fff"
        />
      </View>
    </View>
  );
}
// react-native-svg@13.8.0 - expected version: 13.4.0 react-native-svg@13.4.0
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