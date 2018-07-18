
import React, { Component } from 'react'
import {
  View,
  Text,
  Picker, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'


class SchoolPicker extends Component {
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }
    render() {
       return (
          <View>
             <Picker style={stylesL.selectSchool} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "EPHS" value = "EPHS" />
                <Picker.Item label = "HHS" value = "HHS" />
                <Picker.Item label = "NPHS" value = "NPHS" />
                <Picker.Item label = "PCHS" value = "PCHS" />
                <Picker.Item label = "SPHS" value = "NPHS" />
             </Picker>
             <Text style={stylesL.text}>{this.state.user}</Text>
          </View>
       )
    }
 }

export default SchoolPicker

 const stylesL = StyleSheet.create({
    selectSchool: {
        backgroundColor: '#fff', 
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
  },

})
