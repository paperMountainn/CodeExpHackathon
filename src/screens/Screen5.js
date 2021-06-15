import React from 'react'
import {Text, StyleSheet, View} from 'react-native';


function Screen5(){
    return (
        <View>
            <Text style={styles.textStyle}>
                Number of Pax
            </Text>

            <Text style={styles.textStyle}>
                #increment Button
            </Text>

            <button> 
                enter
            </button>
  
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

export default Screen5;