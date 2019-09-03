import React, { Component } from 'react';
import { View, Text,  StyleSheet} from 'react-native';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is login </Text>
      </View>
    );
  }
}

export default login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems : 'center',
      justifyContent : 'center'
      // backgroundColor : 'black'
      
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    lottie: {
      width: 100,
      height: 100
    }
  });
