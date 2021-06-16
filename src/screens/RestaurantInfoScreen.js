import React, { useState } from "react";
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

import ModalDropdown from "react-native-modal-dropdown";

export default function RestaurantInfoScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View style={styles.centeredView}>
      <Text style={styles.titleText}> McDonald's</Text>

      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-500x281.png",
          }}
        />

        <Button
          onPress={() =>
            Linking.openURL(
              "https://www.mcdonalds.com.sg/our-food/mcdonalds/main/"
            )
          }
          title="view menu"
        />
      </View>
      <Text style={styles.mediumText}>Estimated Waiting Time: 25 minutes </Text>

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
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Number of Pax</Text>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
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
              </View>

              <TextInput
                style={styles.input}
                placeholder="phone number"
                onChangeText={onChangeText}
                keyboardType="numeric"
              />
              {text !== null ? (
                <Button
                  color="#000"
                  title="Enter"
                  onPress={() => navigation.navigate("QueueCard")}
                ></Button>
              ) : null}

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.rightStyle}> go back </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",

  },
  modalView: {
    marginTop: 150,
    height: 400,
    backgroundColor: "white",
    borderRadius: 10, //round edges
    padding: 100,
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    margin: 65,
  
  },
  buttonOpen: {
    backgroundColor: "#f9c647",
  },
  buttonClose: {
    backgroundColor: "#f9c647",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  rightStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
  },

  mediumText: {
    fontFamily: "SofiaPro",
    margin: 10,
    fontSize: 15,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "SofiaPro",
  },

  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "#dbdad7",
    color: "#000000",
  },

  container: {
    paddingTop: 10,
  },

  modalContainer: {
  },

  Logo: {
    width: 300,
    height: 300,
  },
  imageStyle: {
    width: 300,
    borderRadius: 5,
    height: 200,
  },
});
