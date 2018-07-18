import React, { Component } from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Greeting} from './house';

  // SORTED CLASS
export class MenuBar extends Component {

    _verify911() {
        Alert.alert(   // Works on both iOS and Android
        'Call 911',
        'Please Confirm Emergency Call',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Proceed', onPress: () => Linking.openURL('tel:611'), style: 'proceed'},
        ],
        { cancelable: true }
        )
    }

    render() {    

        const icon = {uri: 'https://intranet2.paulding.k12.ga.us/Guardessa/OwlGray.png'};
        const menuIcon = {uri: 'https://intranet2.paulding.k12.ga.us/Guardessa/menuTan.png'};

      return (
        <View style={styles.menuBar}> 
        
        {/* RockWell */}
        <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.rockwell}>
        <Image style={{width: 33, height: 35}} source={icon} />
        </View>
        </TouchableOpacity>

        {/* Greeting */}
        <Greeting name='LCrook' />

        {/* 911 */}
        <View style={styles.menuRight}>                
          <TouchableOpacity onPress={this._verify911} style={styles.btn911Wrap}>     
          <Text style={styles.whiteTxt}>911</Text>     
          </TouchableOpacity>

          {/* Menu */}
          <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
          <Text style={styles.menuText}>&#9776;</Text>
          </TouchableOpacity>
        </View>


        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      menuBar: {
        borderBottomWidth: 1,
        borderColor: '#333',
        flexDirection: 'row',
        height: 50,
        paddingLeft: 18,
        backgroundColor: '#F1F3F9', //  E0DCD7  
        alignItems: 'center',
      },
      rockwell: {
        marginRight: 0,
      },
      menuRight: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 15,
      },
      btn911Wrap: {
          backgroundColor:'#9C1E1E',
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 20,
          width:30,
          height:30,
          marginRight: 25,
        },    
      whiteTxt: {
        color: '#fff',
        fontSize: 10,
      },
      menuBtn: {
        width: 23, 
        height: 25,
        },
        menuText: {
          color: '#111',
          fontSize: 25,
        }
  });



