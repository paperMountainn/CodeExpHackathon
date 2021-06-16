import React, { useState } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import useResults from '../hooks/useResultsFromAPI';
import ResultsList from '../components/ResultsFlatList';


function SearchScreen(){
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    console.log(results);

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar 
                style={styles.searchBarStyle}
                placeholder="Search restaurant"
                value={term}
                onChangeText={setTerm}
                onEndEditing={() => searchAPI(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Short Queuing Time" />
                <ResultsList results={filterResultsByPrice('$$')} title="Longer Queuing Time"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Longest Queuing Time"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'gold',
    },
    searchBarStyle: {
        backgroundColor: 'white',
    }

});

export default SearchScreen;