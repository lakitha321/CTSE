import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import {useRoute} from '@react-navigation/native';


const App = ({}) => {
    const route = useRoute();
    const [data, setData] = useState();

    useEffect(() => {
        function getData(){
            axios.get(`https://ctse-node-server.herokuapp.com/attendance/get/${route.params.id}`).then((res) => {
                setData(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getData();
    }, []);
    
  return(
    <>
    <View>
      <Text style={styles.headertext}>{data.name}</Text>
      <Text style={styles.headertext}>{data.nic}</Text>
      <Text style={styles.headertext}>{data.class}</Text>
      <Text style={styles.headertext}>{data.batch}</Text>
      <Text style={styles.headertext}>{data.year}</Text>
      <Text style={styles.headertext}>{data.month}</Text>
      <Text style={styles.headertext}>{data.day}</Text>
      <Text style={styles.headertext}>{data.time}</Text>
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