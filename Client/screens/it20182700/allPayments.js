import React, {useEffect, useState} from "react";
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  Platform,
  RefreshControl,
  SafeAreaView,
  TextInput,
  Button
} from "react-native";

const App = () => {

    const [payments, setPayments] = useState([]);
    const [refresfIconState, setRefresfIconState] = useState(false);
    
    const [search, setSearch] = useState("");

    useEffect(() => {
        function getPayments(){
            axios.get("https://ctse-node-server.herokuapp.com/payments/getAll").then((res) => {
                setPayments(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getPayments();
    }, []);

    const onRefreshState = () => {
        setRefresfIconState(true);
        getDataUsingAsyncAwaitGetCall();
        setRefresfIconState(false);
    }

    const getDataUsingAsyncAwaitGetCall = async () => {
        try {
          const response = await axios.get(
            `https://ctse-node-server.herokuapp.com/payments/getAll`,
          );
          setPayments(response.data);
        } catch (error) {
          // handle error
          alert(error.message);
        }
    };

    return(
        <>
        <View style={styles.body}>
        <Text> </Text>
        <Text> Tap to View Details </Text>
        <Text> </Text>
        <ScrollView refreshControl={<RefreshControl onRefresh={onRefreshState} refreshing={refresfIconState}/>}>
        {
        payments.map(
        (val) => {
            if(search === ""){
            return(
            <>
            <View key={val._id}>
            <Pressable style={styles.subbutton} 
            // onPress={()=>{setDialog(val._id, val.product_name, val.product_price, val.product_desc, val.product_type, val.createdAt, val.updatedAt, 0)}}
            >
                <View>
                <View>
                    <Text style={styles.text}>{val.createdAt}</Text>
                </View>
                </View>
            </Pressable>
            <View style={styles.line} />
            </View>
            </>
            )}
            else if(val.createdAt.toLowerCase().includes(search.toLowerCase())){
            return(
            <>
            <View key={val._id}>
            <Pressable style={styles.subbutton} 
            // onPress={()=>{setDialog(val._id, val.product_name, val.product_price, val.product_desc, val.product_type, val.createdAt, val.updatedAt, 0)}}
            >
                <View>
                <View>
                    <Text style={styles.text}>{val.createdAt}</Text>
                </View>
                </View>
            </Pressable>
            <View style={styles.line} />
            </View>
            </>
            )
            }
        })
        }
        <Text>    </Text>
        </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

  body : {
    backgroundColor : 'white',
    alignItems:'center',
    justifyContent:'center',
    // flex:0.8
  },
  subbutton: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 1,
    borderColor:'black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }
})

export default App;

