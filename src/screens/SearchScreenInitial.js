
import React from 'react'
import { SearchBar, Button } from 'react-native-elements';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



class SearchScreenInitial extends React.Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.container1}>
      {/* <SearchBar
        placeholder="Search for Restaurants..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme="false"
        containerStyle={{backgroundColor: 'black', borderWidth: 0, borderRadius: 0}}
        inputContainerStyle={{backgroundColor: 'light grey', borderWidth: 1, borderRadius: 30}}
      /> */}
      <SearchBar
        placeholder="Search for Restaurants..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme="false"
        containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 0}}
        inputContainerStyle={{backgroundColor: 'light grey', borderWidth: 1, borderRadius: 10}}
      />

    <View style={styles.container2}>

      <Text style={styles.instructions}>
        <AntDesign name="filter" size={20} color="grey" />
        Filter
      </Text>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen')} style={styles.button}>
          <Text style={styles.buttonText}>Waiting Time</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Healthy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Japanese</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Beverages</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Korean</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Thai</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Halal</Text>
        </TouchableOpacity>
      </View>


      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Chinese</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Dessert</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Beverages</Text>
        </TouchableOpacity>
      </View>


      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Vegetarian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Asian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Fast Food</Text>
        </TouchableOpacity>
      </View>


      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Seafood</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Local</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Italian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Redirecting')} style={styles.button}>
          <Text style={styles.buttonText}>Popular</Text>
        </TouchableOpacity>

      </View>

    </View>


      {/* <Text>{this.state.search}</Text> */}

    </SafeAreaView>
    );
  }
}




const styles = StyleSheet.create({
    container1: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 0,
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  
  instructions: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  button: {
    borderWidth:1,
    borderColor:'grey',
    // alignItems:'left',
    // justifyContent:'left',
    padding: 4,
    backgroundColor:'#fff',
    borderRadius:30,
    marginBottom: 8,
    marginHorizontal: 5,

  },

  buttonText: {
    fontSize: 18,
    color: 'grey',
  }, 

});


export default SearchScreenInitial;