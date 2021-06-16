import React from 'react'
import { SearchBar } from 'react-native-elements';
import { Text, StyleSheet, View } from 'react-native';

class SearchScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
      <SearchBar
        placeholder="Search for Restaurants"
        onChangeText={this.updateSearch}
        value={search}
      />
      <Text>{this.state.search}</Text>
      </View>
    );
  };
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

export default SearchScreen;