import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

function ResultsFlatList({title, results}){
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                // performance opt
                // every biz has an id, a string, hence we use as key
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <ResultsDetail result={item}/>
                        // <Text>{item.name}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsFlatList;