import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class ProductDetailHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <MaterialCommunityIcons name="back" style={{ right: 1 }} />
        <MaterialCommunityIcons name="home" style={{ right: 1 }} />
        <Text>Header</Text>
        <Text>Header</Text>
        <Text>Header</Text>
      </View>
    );
  }
}

export default ProductDetailHeader;
