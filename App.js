import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen1 from './src/screens/Screen1';
import QueueCard from "./src/screens/QueueCard";
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Screen1: Screen1,
  QueueCard: QueueCard,
  SearchScreen: SearchScreen,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'goSeeQ!'
   }

});

export default createAppContainer(navigator);
