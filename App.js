/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PopupMenu from './PopupMenu.js'
import OptionsMenu from "react-native-options-menu";
import Icon from 'react-native-vector-icons'
import OfflineNotice from './OfflineNotice'
import AwesomeAlert from 'react-native-awesome-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import login from './login';
import home from './home';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';

    const MoreIcon = require("./images/share.png");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const AppNavigator = createStackNavigator(
  {
    Welcome: { screen: login},
    home: { screen: home }
  },
  { headerMode: 'none' }
);

export const Menu = DrawerNavigator({
  Home: { screen: login},
  Chat: { screen: home},
}, {
  contentComponent: login,
  drawerWidth: 300
});
export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = { 
      int : false,
      visible: false,
      is_searching : true
       };
     
    Obj = new OfflineNotice();
  }
  editPost = () => {
    alert('m editing')
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible,
        is_searching : false,
        showAlert: false
      });
    }, 2000)
    Obj.handleConnectivityChange()
    if( Obj.handleConnectivityChange() == false){

    }
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  deletePost = () => {
    alert('m deleting')
  }
  cancel = () => {
    
  }
  onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) this.onEdit()
    else this.onRemove()
  }
  // showAlert = () => {
  //   alert(' i m here')
  // }

  onNavigationChange = (navState, currentState ,action) => {
    console.log('nav', navState.routes[navState.index])
   if (navState.hasOwnProperty('index')) {
     this.setState({navState: navState.routes[navState.index]})
 } else {
     this.setState({navState: setCurrentRouteName(navState.routeName)})
 }
 }
  render() {
    const {showAlert} = this.state;
    const { visible } = this.state;
    return (
      <View style={{flex:1}}>
     <AppNavigator
      onNavigationStateChange={this.onNavigationChange}  />  
      
      </View>
  //   <View style={styles.container}>
  //   {/* <OptionsMenu
  // button={MoreIcon}
  // buttonStyle={{ width: 50, height: 50 }}
  
  // options={["Edit", "Delete", "cancel"]}
  // actions={[this.editPost, this.deletePost, this.cancel]}/> */}

  // <OfflineNotice/>
  // <Text>hiii</Text>
  // <TouchableOpacity onPress={() => {this.showAlert()}} style={{height:50, width:100, backgroundColor: 'green', alignSelf:'center', justifyContent: 'center', marginTop:15}}>
  //      <Text style={{color:'white', alignSelf:'center'}}>Show Alert</Text>
  //    </TouchableOpacity>
     
  //    <Spinner 
  //         visible={this.state.is_searching} 
  //         textContent={"Looking for drivers..."} 
  //         textStyle={{color: 'green'}} />
  //          <AwesomeAlert
  //         show={showAlert}
  //         showProgress={true}
  //         title="AwesomeAlert"
  //         message="I have a message for you!"
  //         closeOnTouchOutside={false}
  //         closeOnHardwareBackPress={false}
  //         showCancelButton={true}
  //         showConfirmButton={true}
  //         cancelText="No, cancel"
  //         confirmText="Yes, delete it"
  //         confirmButtonColor="#DD6B55"
  //         onCancelPressed={() => {
  //           this.hideAlert();
  //         }}
  //         onConfirmPressed={() => {
  //           this.hideAlert();
  //         }}
  //       />
  //    </View>
    );
  }
}

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
