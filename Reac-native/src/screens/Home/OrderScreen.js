import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Animated } from 'react-native';
import { Modal as Modals } from 'react-native-paper';

// import * as Animatable from 'react-native-animatable';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoMarginTop: new Animated.Value(500),
      logoMarginRight: new Animated.Value(100),
      isAnimatingShow: false,
      visible: false,
      hideModal: true,
    };
  }
  StartAnimation = () => {
    this.setState({
      isAnimatingShow: true,
    });
    Animated.timing(this.state.logoMarginTop, { toValue: -40, duration: 2000, useNativeDriver: false }).start(() =>
      this.setState({
        isAnimatingShow: false,
        logoMarginRight: new Animated.Value(100),
        logoMarginTop: new Animated.Value(500),
      }),
    );
    Animated.timing(this.state.logoMarginRight, { toValue: 320, duration: 2000, useNativeDriver: false }).start(() =>
      this.setState({
        isAnimatingShow: false,
        logoMarginRight: new Animated.Value(100),
        logoMarginTop: new Animated.Value(500),
      }),
    );
  };
  // componentDidMount() {
  //   Animated.timing(this.state.logoMarginTop, { toValue: -40, duration: 2000, useNativeDriver: false }).start();
  //   Animated.timing(this.state.logoMarginRight, { toValue: 320, duration: 2000, useNativeDriver: false }).start();
  // }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <View style={{ width: '100%', borderWidth: 1, flex: 1 }}>
        {this.state.isAnimatingShow && (
          <Animated.Image
            source={require('../../assets/images/banners/online-shopping-on-mobile-phone.jpg')}
            style={{
              width: 50,
              height: 50,
              marginTop: this.state.logoMarginTop,
              marginLeft: this.state.logoMarginRight,
              position: 'absolute',
            }}
          />
        )}
        <Button onPress={() => this.StartAnimation()}>
          <Text>Animation</Text>
        </Button>
        <Button onPress={() => this.showModal()} />
        <Modals
          visible={this.state.visible}
          onDismiss={() => {
            this.hideModal();
          }}
          // contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modals>
      </View>
    );
  }
}

export default OrderScreen;
