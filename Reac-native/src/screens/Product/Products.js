import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import RatingComponent from '../../component/RatingComponent';
import PriceFormat from '../../component/PriceFormat';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon as IconRneui } from '@rneui/themed';
import { connect } from 'react-redux';
import DividerComponent from '../../component/DividerComponent';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'PHO_BIEN',
      isIncrease: false,
      visiableProducts: 6,
    };
  }
  handlePressPhoBien = (searchVal) => {
    this.setState({
      orderBy: 'PHO_BIEN',
    });
    this.props.OrderByPopular(searchVal);
  };
  handlePressMoiNhat = (searchVal) => {
    this.setState({
      orderBy: 'MOI_NHAT',
    });
    this.props.OrderByDateSubmitted(searchVal);
  };
  handlePressBanChay = (searchVal) => {
    this.setState({
      orderBy: 'BAN_CHAY',
    });
    this.props.OrderByShelled(searchVal);
  };
  handlePressGia = (searchVal) => {
    this.setState(
      //Sử dụng hàm call back trong this.setState-hàm callback này luôn thực hiện sau khi setState
      // Đảm bảo OrderByPrice thực hiện sau khi setState
      (prevState) => ({
        orderBy: 'GIA',
        isIncrease: !prevState.isIncrease,
      }),
    );
    this.props.OrderByPrice(this.state.isIncrease, searchVal);
  };
  handlePressProduct = (product) => {
    this.props.handlePressProductImage(product);
  };
  handleLoadmore = () => {
    this.setState((prevState) => {
      return { visiableProducts: prevState.visiableProducts + 6 };
    });
  };
  render() {
    const { products, userLogin, searchVal } = this.props;
    return (
      <>
        <View style={{ backgroundColor: '#e1f0ff' }}>
          <View
            style={{
              width: '100%',
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#e1f0ff',
            }}
          >
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressPhoBien(searchVal);
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Phổ biến
                </Text>
                {this.state.orderBy === 'PHO_BIEN' ? <DividerComponent bgColor={'orange'} /> : null}
              </TouchableOpacity>
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressMoiNhat(searchVal);
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Mới nhất
                </Text>
              </TouchableOpacity>
              {this.state.orderBy === 'MOI_NHAT' ? <DividerComponent bgColor={'orange'} /> : null}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressBanChay(searchVal);
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Bán chạy
                </Text>
              </TouchableOpacity>
              {this.state.orderBy === 'BAN_CHAY' ? <DividerComponent bgColor={'orange'} /> : null}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressGia(searchVal);
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      color: 'rgb(57, 58, 52)',
                      fontSize: 15,
                      backgroundColor: '#e1f0ff',
                    }}
                  >
                    Giá{' '}
                  </Text>
                  <View style={{ flexDirection: 'column' }}>
                    <Icon name="caret-up" size={10} color={!this.state.isIncrease ? 'orange' : null} />
                    <Icon name="caret-down" size={10} color={this.state.isIncrease ? 'orange' : null} />
                  </View>
                </View>
              </TouchableOpacity>
              {this.state.orderBy === 'GIA' ? <DividerComponent bgColor={'orange'} /> : null}
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                width: '100%',
                flex: 1,
                marginTop: 5,
                // marginBottom: 150,
                flexDirection: 'row',
                flexWrap: 'wrap', // Cho phép xuống dòng
                justifyContent: 'space-around',
                paddingLeft: 5,
              }}
            >
              <FlatList
                scrollEnabled={false}
                data={products.slice(0, this.state.visiableProducts)} // Hiển thị visiableProducts records từ index 0
                numColumns={2}
                keyExtractor={(item) => item.id.toString()} //key
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: '48%',
                      height: 350,
                      justifyContent: 'space-around',
                      flexDirection: 'column',
                      backgroundColor: '#fff',
                      margin: 2,
                      borderRadius: 2,
                      padding: 3,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.props.handleProductDetail(item);
                      }}
                    >
                      <Image style={{ resizeMode: 'contain', width: '100%', height: 200 }} source={item.avatar} />
                    </TouchableOpacity>
                    <Text>{item.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <Text style={{ color: 'red' }}>
                        <PriceFormat price={item.price} />
                      </Text>
                      <Text style={{ color: 'red', fontStyle: 'italic' }}> -{item.saleOff}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <RatingComponent rating={item.rating} />

                      {/* <Text
                        style={{
                          color: 'rgb(57, 58, 52)',
                          fontSize: 13,
                        }}
                      >
                        Thêm vào giỏ
                      </Text> */}
                      <IconRneui
                        name="add-shopping-cart"
                        size={20}
                        color={'#EE4E34'}
                        onPress={() => {
                          this.props.handleAddBag(item, userLogin);
                        }}
                      />
                    </View>
                    {/* <TouchableOpacity
                      style={{
                        width: '70%',
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'orange',
                        borderRadius: 10,
                      }}
                      onPress={() => {
                        this.props.handleAddBag(item, userLogin);
                      }}
                    >
                      <Text
                        style={{
                          color: 'rgb(57, 58, 52)',
                          fontSize: 13,
                        }}
                      >
                        Mua ngay
                      </Text>
                    </TouchableOpacity> */}
                  </View>
                )}
              />
            </View>
            <View style={{ width: '100%', height: 150, alignItems: 'center' }}>
              {this.state.visiableProducts < products.length && (
                <TouchableOpacity
                  onPress={() => {
                    this.handleLoadmore();
                  }}
                >
                  <Text>Xem thêm</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state.products.products, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OrderByPopular: (searchVal) => dispatch({ type: 'PHO_BIEN', payload: { searchVal: searchVal } }),
    OrderByDateSubmitted: (searchVal) => dispatch({ type: 'MOI_NHAT', payload: { searchVal: searchVal } }),
    OrderByShelled: (searchVal) => dispatch({ type: 'BAN_CHAY', payload: { searchVal: searchVal } }),
    OrderByPrice: (isIncrease, searchVal) =>
      dispatch({ type: isIncrease ? 'GIA_TANG' : 'GIA_GIAM', payload: { searchVal: searchVal } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
