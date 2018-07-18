import React, { Component } from 'react';
import {Alert, ActivityIndicator, Button, FlatList, Image, Linking, ScrollView, SectionList, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {MenuBar} from '../components/menuBar';
import {LocationBar} from '../components/locationBar';
import {BGImage} from '../components/bgImage';
import styles from './screens.style';

import LocationPick from '../components/locationPick'


// Rescue -------------------------------------------------------------
class Location extends Component {
  render() {
    return (
      <View style={styles.container}>

      <MenuBar navigation = {this.props.navigation}/> 
      <LocationBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}> 

        <View style={styles.contentBox}>
        <BGImage />
        <Text style={{padding:10, fontSize:22}}>EMS</Text>
      <LocationPick /> 
        </View>
        </ScrollView>
      </View>
    );
  }
}
  
  
  export default Location;  