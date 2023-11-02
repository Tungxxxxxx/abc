import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { getRandomNumber } from '../../utils/function';
import PriceFormat from '../../component/PriceFormat';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  getProductById = (productId) => {
    const products = this.props.products;
    const index = products.findIndex((product) => product.id === productId);
    console.log('products[index]', products[index]);
    return products[index];
  };
  render() {
    const { userLogin } = this.props;
    return (
      <View style={{ width: '100%', flex: 1 }}>
        <FlatList
          data={userLogin.orders}
          numColumns={1}
          keyExtractor={() => getRandomNumber(99)}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <View>
                <FlatList
                  scrollEnabled={false}
                  data={item.products}
                  numColumns={1}
                  keyExtractor={() => getRandomNumber(999)}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image style={{ width: 70, height: 70 }} source={item.product.avatar} />
                      <View style={{ flexDirection: 'column' }}>
                        <Text>{item.product.title}</Text>
                        <Text>
                          <PriceFormat price={item.product.price} />
                        </Text>
                        <Text>Số lượng: {item.qty}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Nunito_LightItalic' }}>Tổng thanh toán</Text>
                <Text>
                  <PriceFormat price={item.payments} />
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Nunito_LightItalic' }}>Tình trạng</Text>
                <Text>{item.status}</Text>
              </View>
              <Divider />
            </View>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { userLogin: state.userLogin.userLogin, products: state.products.products, users: state.users.users };
};
export default connect(mapStateToProps)(OrderScreen);
