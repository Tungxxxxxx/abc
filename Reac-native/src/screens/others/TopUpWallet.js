import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
class TopUpWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Số tiền cần nạp</Text>
        <TextInput></TextInput>
        <Button>Nạp tiền</Button>
      </View>
    );
  }
}

export default TopUpWallet;
