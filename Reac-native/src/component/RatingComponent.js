import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

class RatingComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { rating } = this.props;
    if (rating === 0) {
      return <Text></Text>;
    } else {
      // Tạo một mảng chứa dãy số từ 1->rating tăng 1 mỗi lần
      const ratings = Array.from({ length: rating }, (_, index) => index * 1 + 1);
      return (
        <View style={{ flexDirection: 'row' }}>
          {ratings.map((item, i) => {
            return <Text key={i}>⭐</Text>;
          })}
          {/* <Text> {rating}/5</Text> */}
        </View>
      );
    }
  }
}
export default RatingComponent;
