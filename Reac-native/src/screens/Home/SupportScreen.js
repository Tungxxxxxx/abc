import React from 'react';
import { View, Text } from 'react-native';
class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Nunito_LightItalic' }}>Chat Screen</Text>
      </View>
    );
  }
}
export default SupportScreen;
