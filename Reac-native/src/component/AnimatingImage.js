import React from 'react';
import { Image } from 'react-native';
import { Animated } from 'react-native';
class AnimatingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      // Giá trị ban đầu
      animatedValue: new Animated.Value(0),
    };
  }
  setIsAnimatingToParent = (isAnimating) => {
    return isAnimating;
  };
  startAnimation = (duration) => {
    this.setState({ isAnimating: true });
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start(
      () =>
        this.setState({
          isAnimating: false,
          animatedValue: new Animated.Value(0),
        }),
      this.setIsAnimatingToParent(false),
    );
  };
  render() {
    const { imgPath, width, height, x, y } = this.props.animatingProperties;
    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, x],
    });
    const translateY = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, y],
    });
    return (
      <>
        {this.state.isAnimating && (
          <Animated.Image
            source={imgPath}
            style={{ width: width, height: height, transform: [{ translateX }, { translateY }] }}
          />
        )}
      </>
    );
  }
}

export default AnimatingImage;
