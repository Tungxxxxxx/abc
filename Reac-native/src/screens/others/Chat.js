import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextNormal } from '../../component/TextCustom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <TextNormal>Chat Screen</TextNormal>
        <ScrollView></ScrollView>
      </View>
    );
  }
}

export default Chat;
