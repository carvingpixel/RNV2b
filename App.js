import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import createBottomTabNavigator from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import Threat from './screens/Threat';
import Rescue from './screens/Rescue';
import Contact from './screens/Contact';
import Achtung from './screens/Achtung';


export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="shield" color={tintColor} size={24} />
      )
    }
  },
  Threat: {
    screen: Threat,
    navigationOptions: {
      tabBarLabel: 'Threat',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="flash" color={tintColor} size={24} />
      )
    }
  },
  Rescue: {
    screen: Rescue,
    navigationOptions: {
      tabBarLabel: 'Rescue',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="medkit" color={tintColor} size={24} />
      )  // ios-medkit
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="users" color={tintColor} size={24} />
      )  // ios-contacts
    }
  },
  Achtung: {
    screen: Achtung,
    navigationOptions: {
      tabBarLabel: 'Achtung',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="warning" color={tintColor} size={24} />
      ) // ios-warning
    }
  }
}, 
{//router config
    initialRouteName: 'Home',
    order: ['Home','Threat','Rescue','Contact','Achtung'],
    //navigation for complete tab navigator
    navigationOptions: {
     // tabBarVisible: true,
    },
      tabBarOptions: {
        showLabel: true, // hide labels
        activeTintColor: '#fff', // active icon color f8f8f8f   f7f7ef  7A6040 Mr fff
        inactiveTintColor: '#aaa',  // inactive icon color 586589  7a5f3f MR B8A387
        style: {
            backgroundColor: '#523E92' // TabBar background   E0DCD7  MR 523E92
        }
    }
  });

