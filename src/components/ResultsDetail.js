import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native';


function ResultsDetail({result}){
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri: result.image_url}}
            />
            <Text style={styles.name}>
                {result.name}
            </Text>
            <Text>
                {result.rating}/5 Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 10
    }
});

export default ResultsDetail;