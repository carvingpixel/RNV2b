import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';

BASE_FONT = 'System'; // no shared fonts requires custom adds

//AppText CLASS
export class AppText extends Component {
    render() {
      return (
        <Text {...this.props} style={[styles.myAppText,this.props.style]}>{this.props.children}</Text>
      )
    }
    }
    
//AppTextHeading
export class AppHeading extends Component {
    render(){
      return (
      <AppText {...this.props} style={[styles.myAppHeading,this.props.style]}>{this.props.children}</AppText>
      )
    }
  }

const styles = StyleSheet.create({
    myAppText: {
      fontFamily: BASE_FONT,
      fontSize: 19,
      color: 'yellow',
      padding: 10,
    },
    myAppHeading: {
      fontSize: 20,
      color: '#9C1E1E',
    }
  });
  