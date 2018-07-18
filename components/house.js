import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppHeading} from './fontStyles';


// GREETINGS CLASS
export class Greeting extends Component {
    render() {
      return (
        <AppHeading>{this.props.name}</AppHeading>
      );
    }
  }
  
  // SORTED CLASS
  export class Sorted extends Component {
    render() {
      return (
        <Text style={styles.titleText}>You have been sorted into {this.props.house}</Text>
      );
    }
  }


  const styles = StyleSheet.create({
    titleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#c2d39c',
    },
  });