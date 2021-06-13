import React from 'react'
import {Text, StyleSheet, View} from 'react-native';


function Screen2(){
    return (
        <View>
            <Text style={styles.textStyle}>
                This is screen1
            </Text>
  
        </View>
    );
};

const styles = StyleSheet.create({
    // group of styles to the text element
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default Screen2;