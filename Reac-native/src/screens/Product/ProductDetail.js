import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Ratings from './Ratings';
import { Dimensions } from 'react-native';
import BottomBar from '../../component/BottomBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/themed';
import { connect } from 'react-redux';
import IconWithBadge from '../../component/IconWithBadge';
import HTML from 'react-native-render-html';
import { TextNormal, TextItalic, TextBold } from '../../component/TextCustom';
const { width } = Dimensions.get('window');
const screenWidth = width;
class ProductDetail extends React.Component {
  handleScrollImageProduct = (e) => {
    if (!e) {
      return;
    } else {
      const { nativeEvent } = e;
      let currentOffset = 0;
      if (nativeEvent && nativeEvent.contentOffset) {
        currentOffset = nativeEvent.contentOffset.x;
      }
      // console.log('>>>>Check event scroll', currentOffset / screenWidth);
    }
  };
  render() {
    const { product } = this.props.route.params;
    const { navigation, countPIB } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={'#EE4E34'}
            style={{ right: 1 }}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}
          >
            <Icon name="search" color={'#EE4E34'} size={24} marginRight={10} />
            <IconWithBadge badgeCount={countPIB} name={'shopping-cart'} color={'#EE4E34'} size={24} />
          </View>
        </View>
        <View style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <View style={{ width: '100%', padding: 0 }}>
              <View>
                <ScrollView
                  pagingEnabled
                  horizontal={true}
                  contentContainerStyle={{ width: screenWidth * product.images.length, height: 300 }}
                  scrollEventThrottle={16}
                  onScroll={(e) => {
                    this.handleScrollImageProduct(e);
                  }}
                >
                  {product.images.map((item, i) => {
                    return (
                      <View
                        key={item.id}
                        style={{ width: screenWidth, height: 300, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Image key={item.id} style={{ width: screenWidth, height: '100%' }} source={item.path} />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <View style={{ width: '100%', marginBottom: 150 }}>
                <Divider style={{ backgroundColor: 'orange', marginTop: 10, marginBottom: 10 }} />
                <TextBold style={{ fontSize: 20, fontWeight: 'bold' }}>Mô tả sản phẩm</TextBold>
                <TextNormal>
                  {'   '}
                  {product.description}
                </TextNormal>
                <Divider style={{ backgroundColor: 'orange', marginTop: 10, marginBottom: 10 }} />
                <View>
                  <TextNormal style={{ fontSize: 20, fontWeight: 'bold' }}>Đánh giá</TextNormal>
                  <Ratings product={product} />
                </View>
              </View>
            </View>
          </ScrollView>
          <BottomBar
            product={product}
            handleAddBagWithQty={this.props.handleAddBagWithQty}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    width: 200, // Điều chỉnh kích thước mỗi item
    height: 100, // Điều chỉnh kích thước mỗi item
    margin: 10, // Khoảng cách giữa các item
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
const mapStateToProps = (state) => {
  return {
    navigation: state.navigation.navigation,
    countPIB: state.users.countPIB,
    users: state.users,
    userLogin: state.userLogin.userLogin,
  };
};
export default connect(mapStateToProps)(ProductDetail);
