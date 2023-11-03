import React from 'react';
import { View } from 'react-native';
const DividerComponent = ({ bgColor, height, width }) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        alignSelf: 'center',
      }}
    ></View>
  );
};
export default DividerComponent;
