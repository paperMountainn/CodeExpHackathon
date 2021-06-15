import React from 'react'
import {Text, StyleSheet, View} from 'react-native';


function Screen4(){
    return (
        <View>
    
            {/* Name of Resturant */}
            <Text style={styles.textStyle}>
                McDonald's
            </Text>

            {/* Name of Resturant */}
             <Text style={styles.textStyle}>
                Estimated Waiting Time:
            </Text>


            <Text style={styles.textStyle}>
                Click here link for the menu
            </Text>

            <button> 
                Join the Queue
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

export default Screen4;