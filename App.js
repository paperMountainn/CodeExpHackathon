import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import Screen5 from "./src/screens/Screen5";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3,
  Screen5: Screen5,
}, {
   initialRouteName: 'Home',
   defaultNavigationOptions: {
    title: 'hackathon'
   }

});

export default createAppContainer(navigator);
