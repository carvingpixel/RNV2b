import React, { Component } from 'react';
import {Alert, ActivityIndicator, Button, FlatList, Image, Linking, ScrollView, SectionList, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {MenuBar} from '../components/menuBar';
import {LocationBar} from '../components/locationBar';
import {BGImage} from '../components/bgImage';
import styles from './screens.style';

// HomeScreen -------------------------------------------------------------
class Home extends Component {
// CONSTRUCTOR -----------------
constructor(props) {
  super(props);
  this.state = {text: '', isLoading: true};
}

// BUTTON METHODS---------------------
_onPressSMS() {
try {Linking.openURL('sms:4046309931')}
catch (e) {Alert.alert(e.message);}
}
_onPressLink(passLink) {
  try {Linking.openURL(passLink)}
  catch (e) {Alert.alert(e.message);}
  }
_onPressButton() {
  Alert.alert('Alert Message!!')
  }
  
// RENDER ----------------------------
render() {

  return (
    <View style={styles.container}>

    <MenuBar navigation = {this.props.navigation}/> 
    <LocationBar />
    <ScrollView style={{backgroundColor: '#FFFFFF'}}> 
   
    <View style={styles.contentBox}>
    <BGImage />

          {/*
           <Sorted house='Ravenclaw' />
          <Text style={styles.titleText}>Welcome to Guardessa. Our Mascot is Rockwell.</Text>
          */}

          {/* Cross Platform win with colors */}
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Alert</Text>
            </View>
          </TouchableOpacity>       

          {/* Cross Platform win with colors */}
          <TouchableOpacity onPress={this._onPressLink.bind(this,'sms:4046309931')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>SMS Lokin</Text>
            </View>
          </TouchableOpacity>

          {/* Cross Platform win with colors */}
          <TouchableOpacity onPress={this._onPressLink.bind(this,'https://intranet2.paulding.k12.ga.us/documents/HR/Assignment%20of%20Student%20of%20Employees%20JBCCA-1.pdf?updated=22318')}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>PDF LINK</Text>
            </View>
          </TouchableOpacity>      

          {/* Cross Platform win with colors */}
          <TouchableOpacity onPress={this._onPressLink.bind(this,'https://intranet2.paulding.k12.ga.us/documents/HR/Assignment%20of%20Student%20of%20Employees%20JBCCA-1.pdf?updated=22318')}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>PDF LINK</Text>
            </View>
          </TouchableOpacity> 
   

          {/* Cross Platform win with colors */}
          <TouchableOpacity onPress={this._onPressLink.bind(this,'https://intranet2.paulding.k12.ga.us/documents/HR/Assignment%20of%20Student%20of%20Employees%20JBCCA-1.pdf?updated=22318')}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>PDF LINK</Text>
            </View>
          </TouchableOpacity> 


       <Text style={{padding:10, fontSize:42}}>
        {this.state.text.split(' ').map((word) => word && '👻').join(' ')}
        {this.state.text}
      </Text>

      </View>
     </ScrollView>

    {/* inputBar ------------------------------------------*/}
    <TextInput 
            style={{height: 40,backgroundColor: '#fff'}}     
              placeholder="Type here to translate"   
              onChangeText={(text) => this.setState({text})} 
            /> 
        </View>
        );
      }
    }

  
  export default Home;

  

