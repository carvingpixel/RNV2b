import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View } from 'react-native';

class SideMenu extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {

    return (
      <View style={styles.container}>

        <ScrollView>

          {/* MASThead  */}
        <View>
            <View style={styles.mastStyle}>                           
            <Text style={styles.mastMenu}>MENU</Text>          
          </View>
        </View>

        {/* HOME  */}
        <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
              Home
              </Text>
            </View>
        </View>


          {/* LOCATION  */}
          <View>
            {/* <Text style={styles.sectionHeadingStyle}>  LOCATION </Text> */}
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Location')}>
              Set Current Location
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Fetch')}>
               Fetch
              </Text>
            </View>
          </View>



          {/* ALERTS  */}
          <View>
    
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Alert')}>
            Threat/Violence
            </Text>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('EMS')}>
            EMS
            </Text>            
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Achtung')}>
            Achtung
            </Text>
          </View>
          </View>



          {/* CONTACTS  */}
          <View>
 
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Plain')}>
               Contacts
              </Text>
            </View>
          </View>


       
          {/* SUPPORT  */}
          <View>
  
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Achtung')}>
               Threat/Violence Resources
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('EMS')}>
              EMS Resources
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Achtung')}>
              Tech Support
              </Text>
            </View>
          </View>
   

          {/* ACCOUNT  */}
          <View>
  
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>
               Account Details
              </Text>
            </View>
          </View>




        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Paulding County School District</Text>
        </View>
      </View>
    );
  }
}
 
SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;