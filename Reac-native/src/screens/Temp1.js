import React from 'react';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
//import connect để kết nối redux
import { Connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Temp1 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <TouchableOpacity>
          <View style={{ height: 50, width: '80%', backgroundColor: 'orange' }}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}

export default Temp1;
