import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native';


function RestaurantDetailScreen({ navigation }){
    const id = navigation.getParam('id');
    console.log('id');
    return (
        <View style={styles.container}>
            <Text>results show screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
});

export default RestaurantDetailScreen;