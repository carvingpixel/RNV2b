import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home';
import Achtung from './screens/Achtung';

<Home />

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Nav Homes</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Nav Settings!</Text>
//       </View>
//     );
//   }
// }


export default createBottomTabNavigator({
  Home: Home,
  Achtung: Achtung,
  // Settings: SettingsScreen,
});



