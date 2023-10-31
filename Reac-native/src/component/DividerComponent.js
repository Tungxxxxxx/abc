import React from 'react';
import { View } from 'react-native';
const DividerComponent = ({ bgColor }) => {
  return (
    <View
      style={{
        width: '80%',
        height: 2,
        backgroundColor: bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
      }}
    ></View>
  );
};
export default DividerComponent;
