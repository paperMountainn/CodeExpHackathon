import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen1 from './src/screens/Screen1';
import Screen5 from "./src/screens/Screen5";
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Screen1: Screen1,
  Screen5: Screen5,
  SearchScreen: SearchScreen,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'goSeeQ!'
   }

});

export default createAppContainer(navigator);
