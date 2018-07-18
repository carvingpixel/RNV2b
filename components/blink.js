import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from './fontStyles';

// BLINK CLASS
export class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <AppText style={styles.titleText}>{display}</AppText>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF3B45',
    fontStyle: 'italic',
  },
});