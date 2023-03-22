import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView
} from "react-native";


const App = ({navigation}) => {

  return(
    <>
    <View>
    <Text>    </Text>
      <Text style={styles.headertext}>CTSE TEMP</Text>
        <Text style={styles.text}></Text>
        <ScrollView>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('QRCode')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/fruits.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Kaveesha</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Scanner')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/vege.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Lakitha</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start4')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Sanduni</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start3')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Pinindu</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start3')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Pinindu</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start3')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Pinindu</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start3')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Pinindu</Text>
        </Pressable>
        <Text>    </Text>
        <Pressable style={styles.button} onPress={()=>{navigation.navigate('AllPayments')}}>
        <View style={styles.headcontainer}>
          <Image
            style={styles.headLogo}
            // source={require('../App/images/meat.png')}
          />
        </View>
        <Text style={styles.subheadertext}>Pinindu</Text>
        </Pressable>
        <Text>    </Text>
        </ScrollView>
    <Text>    </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  header : {
    backgroundColor : 'white',
    alignItems:'center',
    justifyContent:'center',
    flex:0.3
  },
  body : {
    backgroundColor : 'white',
    flex:0.7
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ECECEC'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  headertext: {
    fontSize: 30,
    letterSpacing: 0.25,
    color: 'black',
  },
  subheadertext: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: 'black',
  },
  container: {
    paddingTop: 5,
    flexDirection:'row'
  },
  headcontainer: {
    paddingTop: 5,
  },
  headLogo: {
    width: 100,
    height: 70,
  }
})

export default App;