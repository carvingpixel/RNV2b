import React, { Component } from 'react';
import { Button, StyleSheet, Text, View  } from 'react-native';


// AlertScreen -------------------------------------------------------------
class Login extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('username', 'anon'),
        headerLeft: null
      };
    };
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const username = navigation.getParam('username', 'anon');
      const location = navigation.getParam('location', 'PCSD');
      const admin = navigation.getParam('admin', '0');
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>       
          <Text>Alert Screen</Text>
          <Text>Username: {username}</Text>
          <Text>Location: {location}</Text>
          <Text>Admin: {admin}</Text>
          <Button
            title="Alert"
            onPress={() =>
              this.props.navigation.navigate('Alert', {
                username: 'LCrook',
                location: 'BOE',  //getfromstate
                admin: 1,
              })}
          />
          <Button
            title="Rescue" style={{marginTop: 20}}
            onPress={() => {
              this.props.navigation.navigate('Rescue', {
                username: 'LCrook',
                location: 'BOE',
                admin: 1,
              });
            }}
          />
          <Button
            title="Contact" style={{marginTop: 20}}
            onPress={() => {
              this.props.navigation.navigate('Contact', {
                username: 'LCrook',
                location: 'BOE',
                admin: 1,
              });
            }}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
  
  
  export default Login;  