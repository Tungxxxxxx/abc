import { Icon } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { event } from 'react-native-reanimated';
class IconWithBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  accessBag = (event) => {
    const { navigation } = this.props;
    navigation.navigate('shoppingBag');
  };
  handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
  };
  render() {
    const { badgeCount, name, color, size } = this.props;
    return (
      <TouchableOpacity
        style={{ with: 24, height: 24, margin: 0 }}
        onPress={(event) => {
          this.accessBag(event);
        }}
      >
        <Icon
          name={name}
          color={color}
          size={size}
          onLayout={(event) => {
            this.handleLayout(event);
          }}
        />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -8,
              top: -8,
              backgroundColor: 'red',
              borderRadius: 8,
              width: 22,
              height: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 11 }}>{badgeCount <= 99 ? <>{badgeCount}</> : <>99+</>}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(IconWithBadge);
