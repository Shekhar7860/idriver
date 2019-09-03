import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const { width1 } = Dimensions.get('window').width;
const { height1 } = Dimensions.get('window').height;

function MiniOfflineSign() {

  const handlePress = () => {
   
  }
  return (
    <View style={styles.offlineContainer}>
     <Image style={{width:400, height:400}} source={require("./images/nointernet_connection.png")}/>
     <TouchableOpacity onPress={handlePress} style={{height:50, width:100, backgroundColor: 'green', alignSelf:'center', justifyContent: 'center', marginTop:15}}>
       <Text style={{color:'white', alignSelf:'center'}}>Try Again</Text>
     </TouchableOpacity>
     <Text style={{alignSelf:'center'}}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
   state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    console.log(isConnected, 'iiii')
      this.setState({ isConnected });
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
   height:700,
   marginTop:20
   
  },
  offlineText: { color: '#fff' }
});

export default OfflineNotice;