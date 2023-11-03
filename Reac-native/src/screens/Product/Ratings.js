import React from 'react';
import { connect } from 'react-redux';
import RatingComponent from '../../component/RatingComponent';
import { View, Text, FlatList, Image } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { TextBold, TextItalic, TextNormal } from '../../component/TextCustom';

class Ratings extends React.Component {
  getRatingsForProduct = (product, ratings) => {
    return ratings.filter((item) => item.productId === product.id);
  };
  getUserReview = (rating, users) => {
    return users.filter((item) => item.id === rating.userId);
  };
  render() {
    const { product, ratings, users } = this.props;
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={this.getRatingsForProduct(product, ratings)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <View style={{ width: '100%', height: 30, flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Image source={this.getUserReview(item, users)[0].avatar} size={24} />
                {/* <RatingComponent rating={item.rate} /> */}
                <Rating
                  readonly={true}
                  type="custom" // Sử dụng biểu tượng xếp hạng tùy chỉnh
                  showRating={false}
                  ratingColor="orange" // Màu của các ngôi sao khi được chọn
                  ratingBackgroundColor="grey" // Màu nền của toàn bộ xếp hạng
                  tintColor="#fff"
                  fractions={1} // Số phần thập phân (không cần dấu ngoặc kép)
                  startingValue={item.rate} // Giá trị xếp hạng mặc định (không cần dấu ngoặc kép)
                  imageSize={16}
                />
                <TextNormal> {item.dateComment}</TextNormal>
              </View>
              <View style={{ width: '100%', height: 100 }}>
                <Image resizeMode="contain" style={{ width: '25%', height: '90%' }} source={item.images[0].path} />
              </View>
              <TextNormal>{item.description}</TextNormal>
              <Divider />
            </View>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { ratings: state.ratings.ratings, users: state.users.users };
};
export default connect(mapStateToProps)(Ratings);
