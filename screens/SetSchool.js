
import React, { Component } from 'react'
import {Alert, ActivityIndicator, Button, FlatList, Image, Linking, ScrollView, SectionList, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {MenuBar} from '../components/menuBar';
import {LocationBar} from '../components/locationBar';
import {BGImage} from '../components/bgImage';
import styles from './screens.style';
import { SchoolPicker } from '../components/schoolPicker'



class SetSchool extends Component {
  render () {
    return (       
      <View style={styles.container}>
          
      <MenuBar navigation = {this.props.navigation}/>                    
      <LocationBar />
  
        <View style={styles.contentBox}>
        <BGImage />
        <Text style={stylesL.heading}>Set School</Text>
        <SchoolPicker />
        </View>
   
      </View>
      )
  }
}

export default SetSchool

const stylesL = StyleSheet.create({
      heading: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    selectSchool: {
        backgroundColor: '#fff', 
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
  },

})

