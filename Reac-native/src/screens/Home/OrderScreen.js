import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ width: '100%', flex: 1 }}>
        <Text style={{ fontFamily: 'Nunito_LightItalic' }}>Đơn hàng của bạn</Text>
      </View>
    );
  }
}

export default OrderScreen;
