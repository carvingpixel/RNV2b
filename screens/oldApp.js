import React, { Component } from 'react';
// import {AppText, AppHeading} from './components/fontStyles';
import {Alert, ActivityIndicator, Button, FlatList, Image, Linking, ScrollView, SectionList, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Blink} from './components/blink';
import {MenuBar} from './components/menuBar';
import {LocationBar} from './components/locationBar';
import {BGImage} from './components/bgImage';
import { createBottomTabNavigator } from 'react-navigation'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';



// Alerts ---------------------------------------------------
export class Login extends Component {
  render() {
    return (
      <View style={styles.container}>          
        <Text style={{padding:10, fontSize:22}}>Login</Text>       
      </View>
    );
  }
}

// Alerts ---------------------------------------------------
export class Alerts extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuBar />            
      <LocationBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}> 
             
      <View style={styles.contentBox}>
        <BGImage />
        <Text style={{padding:10, fontSize:22}}>Alerts</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

// Rescue ---------------------------------------------------
export class Rescue extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuBar />            
      <LocationBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}> 

        <View style={styles.contentBox}>
        <BGImage />
        <Text style={{padding:10, fontSize:22}}>EMS</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}


// Contacts ---------------------------------------------------
export class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuBar />            
      <LocationBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}> 
      
      <View style={styles.contentBox}>
        <BGImage />
        <Text style={{padding:10, fontSize:22}}>Contacts</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

// Achtung ---------------------------------------------------
export class Achtung extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuBar />            
      <LocationBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}> 
      
        <View style={styles.contentBox}>
        <BGImage />
        <Text style={{padding:10, fontSize:22}}>Achtung</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

// Home ---------------------------------------------------
export class Home extends Component {

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
      <MenuBar />            
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


// https://oblador.github.io/react-native-vector-icons/
export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="shield" color={tintColor} size={24} />
      )
    }
  },
  Alerts: {
    screen: Alerts,
    navigationOptions: {
      tabBarLabel: 'Alerts',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="flash" color={tintColor} size={24} />
      )
    }
  },
  EMS: {
    screen: EMS,
    navigationOptions: {
      tabBarLabel: 'EMS',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="medkit" color={tintColor} size={24} />
      )
      //ios-medkit
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="users" color={tintColor} size={24} />
        // ios-contacts
      )
    }
  },
  Achtung: {
    screen: Achtung,
    navigationOptions: {
      tabBarLabel: 'Achtung',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="warning" color={tintColor} size={24} />
      ) // ios-warning
    }
  }
}, 
{//router config
    initialRouteName: 'Home',
    order: ['Home','Alerts','EMS','Contacts','Achtung'],
    //navigation for complete tab navigator
    navigationOptions: {
     // tabBarVisible: true,
    },
      tabBarOptions: {
        showLabel: false, // hide labels
        activeTintColor: '#fff', // active icon color f8f8f8f   f7f7ef  7A6040 Mr fff
        inactiveTintColor: '#aaa',  // inactive icon color 586589  7a5f3f MR B8A387
        style: {
            backgroundColor: '#523E92' // TabBar background   E0DCD7  MR 523E92
        }
    }
  });


// STYLESHEETS ------------------------------------
const styles = StyleSheet.create({
  bgLayout: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }, 
  container: {
    flex: 1,
    backgroundColor: '#F1F3F9', // E0DCD7
    paddingTop: 24,
  },
  contentBox: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
   height:600,
    paddingTop:30,
  },
  inputBar: {
    backgroundColor: '#FFFFFF',
    height: 30,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#c2d39c',
  },
  buttonContainer: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#604C31',
    borderColor: '#c2d39c',
    borderRadius:10,
    borderWidth: 1,
    paddingTop:5,
    paddingBottom:5,
  },
  button: {
    marginBottom: 30,
    width: 100,
    backgroundColor: '#2D2D2D', // #B8A387 
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius:10,
    borderWidth: 1,
    paddingTop:4,
    paddingBottom:4,
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
    color: '#ddd' // 63492C
  },
  ghostNames: {
    backgroundColor:'#1c183a',  
  },
  item: {
    padding: 10,
    borderRadius:10,
    fontSize: 15,
    height: 40,
    color: '#c2d39c',
  },
  ghostNames: {
    backgroundColor:'#1c183a',  
  },
  sectionHeader: {
    color: '#c2d39c',
    fontSize: 20,
    fontWeight: 'bold',
  },
  alertBar: {
    // backgroundColor:  '#523E92',  // dynamic based on school inline?
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingBottom: 30, 
    // // height: 25,
    // flex: 1,
    // flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderColor: '#D9D1B7',
    // marginBottom: 30,
  },
});
// var s = require('./components/myStyles');
// https://stackoverflow.com/questions/32930680/is-it-possible-to-separate-var-styles-stylesheet-create-from-react-component-i
