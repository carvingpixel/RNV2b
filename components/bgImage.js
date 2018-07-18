import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export class BGImage extends Component {
  render() {
    const bgOwl = {uri: 'https://intranet2.paulding.k12.ga.us/Guardessa/OwlBG.jpg'};
    const bgDistrict = {uri: 'https://intranet2.paulding.k12.ga.us/Guardessa/DistrictBG.jpg'};
    return (
       <Image source={bgDistrict} style={styles.bgLayout} />
    );
  }
}

const styles = StyleSheet.create({
  bgLayout: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }, 
});

