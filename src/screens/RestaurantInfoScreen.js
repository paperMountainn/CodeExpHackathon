import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
  TextInput,
  Linking,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

export default function RestaurantInfoScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Text style={styles.titleText}> McDonald's</Text>

      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-500x281.png',
          }}
        />

        <Button
          onPress={() =>
            Linking.openURL(
              'https://www.mcdonalds.com.sg/our-food/mcdonalds/main/'
            )
          }
          title="view menu"
        />
      </View>
      <Text style={styles.mediumText}>Estimated Waiting Time: 25 minutes </Text>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Join the Queue</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.rightStyle}> exit </Text>
              </Pressable>

              <TextInput
                style={styles.input}
                placeholder="phone number"
                onChangeText={onChangeText}
                keyboardType="numeric"
              />
            </View>
            {text !== null ? (
              <Button
                color="#000"
                title="Enter"
                onPress={() => navigation.navigate('Screen5')}></Button>
            ) : null}
          </View>

          <Text style={styles.modalText}>Number of Pax</Text>

          <ModalDropdown options={['1', '2', '3', '4', '5']}>
            <Text style={styles.mediumText}> select number </Text>
          </ModalDropdown>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 10, //round edges
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#f9c647',
  },
  buttonClose: {
    backgroundColor: '#f9c647',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  rightStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  mediumText: {
    fontFamily: 'SofiaPro',
    marginTop: 20,
    fontSize: 15,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'SofiaPro',
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },

  container: {
    paddingTop: 50,
  },

  modalContainer: {
    paddingTop: 10,
  },
  Logo: {
    width: 300,
    height: 300,
  },
});


