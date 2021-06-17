import React, { useState, useEffect } from 'react'
// import {Text, StyleSheet, View, Image} from 'react-native';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Image,
    Button,
    Picker,
    TextInput,
    Linking,
  } from "react-native";
import yelp from '../api/yelpAPI'

function RestaurantDetailScreen({ navigation }){
    const [result, setResult] = useState(null);
    const [text, onChangeText] = React.useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("1");

    const id = navigation.getParam('id');
    console.log(id);
    console.log(result);

    const getResult = async (id) => {
        console.log('searching single restaurant');
        // response.data is the result
        // response.data.businesses is the array that we want
        try {
            const response = await yelp.get(`${id}`);
            setResult(response.data);
        }
        catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong :(');
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (result === null){
        return null;
    }

    return (
        // <View>
        //     {/* <Text>results show screen</Text> */}
        //     <Text>{result.name}</Text>
        //     <Text>{result.photos[0]}</Text>
        // </View>
        <View style={styles.centeredView}>
        <Text style={styles.titleText}> {result.name}</Text>

        <Image
        style={styles.imageStyle}
        source={{
            uri: result.photos[0],
        }}
        />
        <Text style={styles.mediumText}>Estimated Waiting Time: 15 minutes </Text>
  
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}> Check Queue</Text>
        </Pressable>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("nvm, i changed my mind");
            setModalVisible(!modalVisible);
          }}
        >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Number of Pax:</Text>
                <Picker
                selectedValue={selectedValue}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                </Picker>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        style={styles.input}
                        placeholder="phone number"
                        onChangeText={onChangeText}
                        // keyboardType="numeric"
                    />
                </View>
               
                <Button
                color="#000"
                title="Enter"
                onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate("QueueCard");
                }}
                ></Button>
                
                <Pressable
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.rightStyle}> Quit </Text>
                </Pressable>
              </View>
        </Modal>
      </View>


    );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    paddingTop: 20
    
  },
  imageStyle: {
    width: 300,
    borderRadius: 10,
    height: 200,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 2,
    margin: 50,
    backgroundColor: "#f9c647",

  },
  modalView: {
    marginVertical: 100,
    marginHorizontal: 10,
    height: 500,
    backgroundColor: "white",
    borderRadius: 10, 
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  rightStyle: {
    color: "white",
    fontWeight: "bold",    
  },
  modalText: {
    // marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  pickerStyle: {
    height: 50, 
    width: 150, 
    margin: 100
  },
  mediumText: {
    // fontFamily: "SofiaPro",
    margin: 20,
    fontSize: 15,
  },
  titleText: {
    margin:15,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: 'center'
    // fontFamily: "SofiaPro",
  },

  backgroundStyle:{        
    backgroundColor: '#999999',
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
  },
  input: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    // default is 14
    fontSize: 18,
  },
  Logo: {
    width: 300,
    height: 300,
  },

});

export default RestaurantDetailScreen;