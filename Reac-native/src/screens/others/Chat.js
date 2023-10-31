import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Chat Screen</Text>
        <ScrollView></ScrollView>
      </View>
    );
  }
}

export default Chat;
