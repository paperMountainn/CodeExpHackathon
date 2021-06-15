import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
        onPress={() => navigation.navigate("Screen1")}
        title='Go to Screen1'
      />
      <Button 
        onPress={() => navigation.navigate("Screen2")}
        title='Go to Screen2'
      />
      <Button 
        onPress={() => navigation.navigate("Screen3")}
        title='Go to Screen3'
      />
      <Button 
        onPress={() => navigation.navigate("SearchScreen")}
        title='Go to SearchScreen'
      />

    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;