// navigators.js

import { createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AlertScreen from './screens/AlertScreen'
import ContactScreen from './screens/ContactScreen'
import LoginScreen from './screens/LoginScreen'
import RescueScreen from './screens/RescueScreen'
import AccountScreen from './screens/AccountScreen'

export const appNavDrawer = createDrawerNavigator({
    appNavTab: { screen: appNavTab },
});


export const appNavTab = createBottomTabNavigator({
 HomeScreen: {screen: HomeScreen},
 AlertScreen: {screen: AlertScreen},
 ContactScreen: {screen: ContactScreen},
 LoginScreen: {screen:LoginScreen },
 RescueScreen: {screen:RescueScreen },
 AccountScreen: {screen:AccountScreen },
  }, 
  {//router config
      //initialRouteName: 'Home',
      order: ['HomeScreen','AlertScreen','RescueScreen','ContactScreen','AccountScreen'],
      animationEnabled: true,
     tabBarOptions: {
          showLabel: false, // hide labels
          activeTintColor: '#fff', // active icon color f8f8f8f   f7f7ef  7A6040 Mr fff
          inactiveTintColor: '#aaa',  // inactive icon color 586589  7a5f3f MR B8A387
          style: {
              backgroundColor: '#523E92' // TabBar background   E0DCD7  MR 523E92
          }
      }
    });

export const appNavSide = createDrawerNavigator({
    
}); 




export default navigatorFull; 