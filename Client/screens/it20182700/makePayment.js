import React, { useState, useEffect } from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert
} from "react-native";


const App = ({navigation}) => {

    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);
    const [month, setmonth] = useState('');

    const [refresh, setRefresh] = useState(false);

    const [jan, setJan] = useState();
    const [feb, setfeb] = useState();
    const [mar, setmar] = useState();
    const [apr, setapr] = useState();
    const [may, setmay] = useState();
    const [jun, setjun] = useState();
    const [jul, setjul] = useState();
    const [aug, setaug] = useState();
    const [sep, setsep] = useState();
    const [oct, setoct] = useState();
    const [nov, setnov] = useState();
    const [dec, setdec] = useState();

    const [show, setShow] = useState(false);

    const id = '64157ce58156e34dfcd66ea0';

    useEffect(() => {
        refreshConetnt();
    }, []);

    const refreshConetnt = () => {
        function getJan(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/January`).then((res) => {
                setJan(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getFeb(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/February`).then((res) => {
                setfeb(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getMar(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/March`).then((res) => {
                setmar(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getApr(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/April`).then((res) => {
                setapr(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getMay(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/May`).then((res) => {
                setmay(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getJun(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/June`).then((res) => {
                setjun(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getJul(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/July`).then((res) => {
                setjul(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getAug(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/August`).then((res) => {
                setaug(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getSep(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/September`).then((res) => {
                setsep(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getOct(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/October`).then((res) => {
                setoct(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getNov(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/November`).then((res) => {
                setnov(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        function getDec(){
            axios.get(`https://ctse-node-server.herokuapp.com/payments/get/64157ce58156e34dfcd66ea0/${year}/December`).then((res) => {
                setdec(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getJan();
        getFeb();
        getMar();
        getApr();
        getMay();
        getJun();
        getJul();
        getAug();
        getSep();
        getOct();
        getNov();
        getDec();
    };

    async function changeYear(yr){
        resetPayments();
        setYear(yr);
        refreshConetnt();
    };

    const resetPayments = () => {
        setJan();
        setfeb();
        setmar();
        setapr();
        setmay();
        setjun();
        setjul();
        setaug();
        setsep();
        setoct();
        setnov();
        setdec();
    };

    const handleDelete = (id) => {
        Alert.alert(
            'Confirm',
            'Are you sure you want to delete this payment?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                    deletePayment(id);
                },
              },
            ],
        );
    };

    const handleEdit = (id, type) => {
        if(type === 'Cash'){
            Alert.alert(
                'Confirm',
                'Are you sure you want to change the payment type from Cash to Card?',
                [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        editPaymentType(id, 'Card');
                    },
                },
                ],
            );
        }
        if(type === 'Card'){
            Alert.alert(
                'Confirm',
                'Are you sure you want to change the payment type from Card to Cash?',
                [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        editPaymentType(id, 'Cash');
                    },
                },
                ],
            );
        }
    };

    const deletePayment = async (id) => {
        await axios.delete(`https://ctse-node-server.herokuapp.com/payments/delete/${id}`).then((res) => {
            Alert.alert(res.data.status);
            setRefresh(!refresh);
        }).catch((err) => {
            alert(err);
        })
    }

    const editPaymentType = async (id, type) => {
        await axios.put(`https://ctse-node-server.herokuapp.com/payments/edit/${id}/${type}`).then((res) => {
            Alert.alert(res.data);
            setRefresh(!refresh);
        }).catch((err) => {
            alert(err);
        })
    }

    const route = useRoute();

    const makePayment = (m) => {
        navigation.navigate('SubmitPayment',{
            sid:id,
            month:m,
            year:year,
            student:route.params.stud
        });
    };

    return (
        <View style={styles.container}>
        <View style={styles.box1}>
        <Text style={styles.profileText}>Student : {route.params.stud.student_name}</Text>
        <Text style={styles.profileText}>NIC         : {route.params.stud.nic}</Text>
        <Text style={styles.profileText}>Batch     : {route.params.stud.student_name}</Text>
        <Text style={styles.profileText}>Year       : {route.params.stud.student_name}</Text>
        </View>
        <Text style={styles.profileText}>{year}</Text>
        <View
        style={{
            flexDirection: 'row',
            height: 80,
            padding: 20,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => changeYear(2020)}>
        <Text style={styles.buttonText}>2020</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeYear(2021)}>
        <Text style={styles.buttonText}>2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeYear(2022)}>
        <Text style={styles.buttonText}>2022</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeYear(2023)}>
        <Text style={styles.buttonText}>2023</Text>
        </TouchableOpacity>
        </View>
        <ScrollView >
            <Pressable style={styles.subbutton} >
                <View>
                {jan &&
                <View>
                    {!(jan.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>JANUARY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {jan.date}</Text>
                    <Text style={styles.text2}>Payment Time : {jan.time}</Text>
                    <Text style={styles.text2}>Amount : {jan.price}</Text>
                    <Text style={styles.text2}>Payment Type : {jan.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(jan._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(jan._id, jan.status)} />
                    </View>
                    </>
                    }
                    {jan.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>JANUARY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{jan.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{jan.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{jan.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{jan.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('January')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!jan &&
                <View>
                    <ActivityIndicator size="large" />
                </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {feb &&
                <View>
                    {!(feb.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>FEBRUARY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {feb.date}</Text>
                    <Text style={styles.text2}>Payment Time : {feb.time}</Text>
                    <Text style={styles.text2}>Amount : {feb.price}</Text>
                    <Text style={styles.text2}>Payment Type : {feb.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(feb._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(feb._id, feb.status)} />
                    </View>
                    </>
                    }
                    {feb.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>FEBRUARY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{feb.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{feb.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{feb.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{feb.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('February')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!feb &&
                <View>
                    <ActivityIndicator size="large" />
                </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {mar &&
                <View>
                    {!(mar.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>MARCH</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {mar.date}</Text>
                    <Text style={styles.text2}>Payment Time : {mar.time}</Text>
                    <Text style={styles.text2}>Amount : {mar.price}</Text>
                    <Text style={styles.text2}>Payment Type : {mar.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(mar._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(mar._id, mar.status)} />
                    </View>
                    </>
                    }
                    {mar.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>MARCH</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{mar.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{mar.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{mar.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{mar.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('March')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!mar &&
                <View>
                    <ActivityIndicator size="large" />
                </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {apr &&
                <View>
                    {!(apr.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>APRIL</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {apr.date}</Text>
                    <Text style={styles.text2}>Payment Time : {apr.time}</Text>
                    <Text style={styles.text2}>Amount : {apr.price}</Text>
                    <Text style={styles.text2}>Payment Type : {apr.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(apr._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(apr._id, apr.status)} />
                    </View>
                    </>
                    }
                    {apr.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>APRIL</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{apr.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{apr.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{apr.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{apr.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('April')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!apr &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {may &&
                <View>
                    {!(may.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>MAY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {may.date}</Text>
                    <Text style={styles.text2}>Payment Time : {may.time}</Text>
                    <Text style={styles.text2}>Amount : {may.price}</Text>
                    <Text style={styles.text2}>Payment Type : {may.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(may._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(may._id, may.status)} />
                    </View>
                    </>
                    }
                    {may.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>MAY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{may.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{may.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{may.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{may.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('May')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!may &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {jun &&
                <View>
                    {!(jun.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>JUNE</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {jun.date}</Text>
                    <Text style={styles.text2}>Payment Time : {jun.time}</Text>
                    <Text style={styles.text2}>Amount : {jun.price}</Text>
                    <Text style={styles.text2}>Payment Type : {jun.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(jun._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(jun._id, jun.status)} />
                    </View>
                    </>
                    }
                    {jun.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>JUNE</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{jun.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{jun.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{jun.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{jun.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('June')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!jun &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {jul &&
                <View>
                    {!(jul.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>JULY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {jul.date}</Text>
                    <Text style={styles.text2}>Payment Time : {jul.time}</Text>
                    <Text style={styles.text2}>Amount : {jul.price}</Text>
                    <Text style={styles.text2}>Payment Type : {jul.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(jul._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(jul._id, jul.status)} />
                    </View>
                    </>
                    }
                    {jul.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>JULY</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{jul.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{jul.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{jul.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{jul.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('July')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!jul &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {aug &&
                <View>
                    {!(aug.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>AUGUST</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {aug.date}</Text>
                    <Text style={styles.text2}>Payment Time : {aug.time}</Text>
                    <Text style={styles.text2}>Amount : {aug.price}</Text>
                    <Text style={styles.text2}>Payment Type : {aug.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(aug._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(aug._id, aug.status)} />
                    </View>
                    </>
                    }
                    {aug.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>AUGUST</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{aug.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{aug.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{aug.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{aug.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('August')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!aug &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {sep &&
                <View>
                    {!(sep.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>SEPTEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {sep.date}</Text>
                    <Text style={styles.text2}>Payment Time : {sep.time}</Text>
                    <Text style={styles.text2}>Amount : {sep.price}</Text>
                    <Text style={styles.text2}>Payment Type : {sep.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(sep._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(sep._id, sep.status)} />
                    </View>
                    </>
                    }
                    {sep.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>SEPTEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{sep.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{sep.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{sep.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{sep.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('September')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!sep &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {oct &&
                <View>
                    {!(oct.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>OCTOBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {oct.date}</Text>
                    <Text style={styles.text2}>Payment Time : {oct.time}</Text>
                    <Text style={styles.text2}>Amount : {oct.price}</Text>
                    <Text style={styles.text2}>Payment Type : {oct.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(oct._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(oct._id, oct.status)} />
                    </View>
                    </>
                    }
                    {oct.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>OCTOBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{oct.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{oct.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{oct.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{oct.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('October')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!oct &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {nov &&
                <View>
                    {!(nov.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>NOVEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {nov.date}</Text>
                    <Text style={styles.text2}>Payment Time : {nov.time}</Text>
                    <Text style={styles.text2}>Amount : {nov.price}</Text>
                    <Text style={styles.text2}>Payment Type : {nov.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(nov._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(nov._id, nov.status)} />
                    </View>
                    </>
                    }
                    {nov.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>NOVEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{nov.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{nov.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{nov.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{nov.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('November')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!nov &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
            <Pressable style={styles.subbutton} >
                <View>
                {dec &&
                <View>
                    {!(dec.price === 'undifined') &&
                    <>
                    <View style={styles.container3}>
                    <Text style={styles.text}>DECEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : {dec.date}</Text>
                    <Text style={styles.text2}>Payment Time : {dec.time}</Text>
                    <Text style={styles.text2}>Amount : {dec.price}</Text>
                    <Text style={styles.text2}>Payment Type : {dec.status}</Text>
                    </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title="Delete" onPress={() => handleDelete(dec._id)} color='#c70000' />
                    <View style={{ width: 10 }} />
                    <Button title="Change Payment Type" onPress={() => handleEdit(dec._id, dec.status)} />
                    </View>
                    </>
                    }
                    {dec.price === 'undifined' &&
                    <>
                    <Text style={styles.text}>DECEMBER</Text>
                    <View style={styles.container2}>
                    <Text style={styles.text2}>Payment Date : <Text style={styles.text3}>{dec.date}</Text></Text>
                    <Text style={styles.text2}>Payment Time : <Text style={styles.text3}>{dec.time}</Text></Text>
                    <Text style={styles.text2}>Amount : <Text style={styles.text3}>{dec.price}</Text></Text>
                    <Text style={styles.text2}>Payment Type : <Text style={styles.text3}>{dec.status}</Text></Text>
                    <Text></Text>
                    <Button title={'Make Payment'} onPress={() => makePayment('December')} color='green' />
                    </View>
                    </>
                    }
                </View>
                }
                {!dec &&
                    <View>
                        <ActivityIndicator size="large" />
                    </View>
                }
                </View>
            </Pressable>
            <Text></Text>
      </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    },
    container2: {
        marginTop:10
    },
    container3: {
        marginLeft:20
    },
    maintext: {
    fontSize: 16,
    margin: 20,
    },
    box1: {
    // alignItems: 'center',
    // justifyContent: 'center',
        marginTop: 20,
        height: 100,
        width: 300,
        overflow: 'hidden',
        // borderRadius: 30,
        backgroundColor: '#fff'
    },
    button: {
        marginRight: 5,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    },
    profileText: {
        fontSize: 16
    },
    subbutton: {
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: '#0a3b79',
        borderRadius: 20,
        opacity: 0.90
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff'
    },
    text2: {
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#fff'
    },
    text3: {
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'red'
    },
    text4: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    dialogContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
})

export default App;