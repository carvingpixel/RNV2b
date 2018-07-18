import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Blink} from './blink';

  // SORTED CLASS
export class LocationBar extends Component {

    render() {
  
      return (

     <View style={styles.locationBar}> 
     {/* <Image style={{width: 52, height: 60}} source={crest} /> */}
     {/* <Greeting school='Dugan Elementary' />  */}
     <Text style={styles.locationName}>Dugan Elementary</Text>  

     {/*Blink alertBar ------------------------------------------*/}
     <Blink text="DUGAN IS UNDER LOCKDOWN" />   
  
     </View>

      );
    }
  }


  const styles = StyleSheet.create({
    locationBar: {
        backgroundColor: '#523E92',  // dynamic based on school inline?
        height: 85,     
        alignItems:'center',
        justifyContent: 'center',
        // marginBottom: 30, 
        paddingTop:30,
        paddingBottom:30,
        // paddingLeft: 18,
      },
      locationName: {
        color:'#E8DED1',
        fontSize:18,
        fontWeight: 'bold',
      },
    });



