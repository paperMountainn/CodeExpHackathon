import React, { useState } from 'react'
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import useResults from '../hooks/useResultsFromAPI';
import ResultsList from '../components/ResultsFlatList';


function SearchScreen({navigation}){
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
            {/* <SearchBar 
             lightTheme={true}
             containerStyle={{backgroundColor: 'black', borderWidth: 0, borderRadius: 0}}
             inputContainerStyle={{backgroundColor: 'light grey', borderWidth: 1, borderRadius: 30}}

            placeholder="Search restaurant"
            value={term}
            onChangeText={setTerm}
            onEndEditing={() => searchAPI(term)}
            /> */}
            <SearchBar
                placeholder="Search for Restaurants..."
                onChangeText={setTerm}
                value={term}
                lightTheme="false"
                containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 0}}
                inputContainerStyle={{backgroundColor: 'light grey', borderWidth: 1, borderRadius: 10}}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Short Queuing Time" navigation={navigation}/>
                <ResultsList results={filterResultsByPrice('$$')} title="Longer Queuing Time" navigation={navigation}/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Longest Queuing Time" navigation={navigation}/>
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