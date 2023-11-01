import React from 'react';
import { Image } from 'react-native';
import { Animated } from 'react-native';
class AnimatingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Giá trị ban đầu
      logoMarginTop: new Animated.Value(0),
      logoMarginRight: new Animated.Value(0),
      isAnimatingShow: false,
    };
  }
  setIsAnimatingToParent = (isAnimating) => {
    return isAnimating;
  };
  startAnimation = (duration) => {
    this.setState({
      isAnimatingShow: true,
    });
    Animated.timing(this.state.logoMarginTop, { toValue: -600, duration: duration, useNativeDriver: false }).start(() =>
      this.setState({
        isAnimatingShow: false,
        logoMarginTop: new Animated.Value(0),
      }),
    );
    Animated.timing(this.state.logoMarginRight, { toValue: -450, duration: duration, useNativeDriver: false }).start(
      () =>
        this.setState({
          isAnimatingShow: false,
          logoMarginRight: new Animated.Value(0),
        }),
    );
  };
  render() {
    const { imgPath, width, height } = this.props.animatingProperties;
    return (
      <>
        {this.state.isAnimatingShow && (
          <Animated.Image
            source={imgPath}
            style={{ width: width, height: height, right: this.state.logoMarginRight, top: this.state.logoMarginTop }}
          />
        )}
      </>
    );
  }
}

export default AnimatingImage;
