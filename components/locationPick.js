
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'


class LocationPick extends Component {
    state = {location: ''}
    updateLocation = (location) => {
       this.setState({ location: location })
    }
    render() {
       return (
          <View>
          <Text style={stylesL.text}>Set School Picker</Text>
             <Picker style={stylesL.pickerTool} selectedValue = {this.state.location} onValueChange = {this.updateLocation}>
               <Picker.Item label = "HHS" value = "HHS" />
               <Picker.Item label = "HMS" value = "HMS" />
               <Picker.Item label = "HES" value = "HES" />
             </Picker>
             <Text style = {stylesL.text}>{this.state.location}</Text>
          </View>
       )
    }
 }

export default LocationPick

const stylesL = StyleSheet.create({
  pickerTool: {
    backgroundColor: 'aliceblue',
  },
text: {
   fontSize: 30,
   alignSelf: 'center',
   color: 'blue'
}
})
