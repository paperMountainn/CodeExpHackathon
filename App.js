import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import QueueCard from "./src/screens/QueueCard";
import SearchScreen from './src/screens/SearchScreen'
import SearchScreenInitial from "./src/screens/SearchScreenInitial";
import RestaurantInfoScreen from "./src/screens/RestaurantInfoScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  RestaurantInfoScreen: RestaurantInfoScreen,
  QueueCard: QueueCard,
  SearchScreen: SearchScreen,
  SearchScreenInitial: SearchScreenInitial,
  RestaurantDetailScreen: RestaurantDetailScreen,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'goSeeQ!'
   }

});

export default createAppContainer(navigator);
