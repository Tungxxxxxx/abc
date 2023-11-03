import React from 'react';
import { View, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import RatingComponent from '../../component/RatingComponent';
import PriceFormat from '../../component/PriceFormat';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon as IconRneui } from '@rneui/themed';
import { connect } from 'react-redux';
import DividerComponent from '../../component/DividerComponent';
import { TextNormal, TextItalic } from '../../component/TextCustom';

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
                <TextNormal
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Phổ biến
                </TextNormal>
                {this.state.orderBy === 'PHO_BIEN' ? (
                  <DividerComponent bgColor={'orange'} width={'80%'} height={2} />
                ) : null}
              </TouchableOpacity>
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressMoiNhat(searchVal);
                }}
              >
                <TextNormal
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Mới nhất
                </TextNormal>
              </TouchableOpacity>
              {this.state.orderBy === 'MOI_NHAT' ? (
                <DividerComponent bgColor={'orange'} width={'80%'} height={2} />
              ) : null}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressBanChay(searchVal);
                }}
              >
                <TextNormal
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Bán chạy
                </TextNormal>
              </TouchableOpacity>
              {this.state.orderBy === 'BAN_CHAY' ? (
                <DividerComponent bgColor={'orange'} width={'80%'} height={2} />
              ) : null}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.handlePressGia(searchVal);
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <TextNormal
                    style={{
                      color: 'rgb(57, 58, 52)',
                      fontSize: 15,
                      backgroundColor: '#e1f0ff',
                    }}
                  >
                    Giá{' '}
                  </TextNormal>
                  <View style={{ flexDirection: 'column' }}>
                    <Icon name="caret-up" size={10} color={!this.state.isIncrease ? 'orange' : null} />
                    <Icon name="caret-down" size={10} color={this.state.isIncrease ? 'orange' : null} />
                  </View>
                </View>
              </TouchableOpacity>
              {this.state.orderBy === 'GIA' ? <DividerComponent bgColor={'orange'} width={'80%'} height={2} /> : null}
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
                    <TextNormal>{item.title}</TextNormal>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <TextNormal style={{ color: 'red' }}>
                        <PriceFormat price={item.price} />
                      </TextNormal>
                      <TextItalic style={{ color: 'red' }}> -{item.saleOff}</TextItalic>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <RatingComponent rating={item.rating} />

                      {/* <TextNormal
                        style={{
                          color: 'rgb(57, 58, 52)',
                          fontSize: 13,
                        }}
                      >
                        Thêm vào giỏ
                      </TextNormal> */}
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
                      <TextNormal
                        style={{
                          color: 'rgb(57, 58, 52)',
                          fontSize: 13,
                        }}
                      >
                        Mua ngay
                      </TextNormal>
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
                  <TextNormal>Xem thêm</TextNormal>
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
  return { products: state.products.products, userLogin: state.users.userLogin };
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
