import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import DividerComponent from '../../component/DividerComponent';
import { connect } from 'react-redux';
import { getRandomNumber } from '../../utils/function';
import PriceFormat from '../../component/PriceFormat';
import { TextBold, TextItalic, TextNormal } from '../../component/TextCustom';
// import { v4 as uuidv4 } from 'uuid';
// import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

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
          showsVerticalScrollIndicator={false}
          data={userLogin.orders}
          numColumns={1}
          keyExtractor={() => uuid.v4()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <View>
                <FlatList
                  scrollEnabled={false}
                  data={item.products}
                  numColumns={1}
                  keyExtractor={() => uuid.v4()}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image style={{ width: 70, height: 70 }} source={item.product.avatar} />
                      <View style={{ flexDirection: 'column' }}>
                        <TextNormal>{item.product.title}</TextNormal>
                        <TextNormal style={{ color: 'red' }}>
                          <PriceFormat price={item.product.price} />
                        </TextNormal>
                        <TextNormal>Số lượng: {item.qty}</TextNormal>
                      </View>
                    </View>
                  )}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextNormal>Tổng thanh toán</TextNormal>
                <TextNormal style={{ color: 'red' }}>
                  <PriceFormat price={item.payments} />
                </TextNormal>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextNormal>Tình trạng</TextNormal>
                <TextItalic>{item.status}</TextItalic>
              </View>
              <DividerComponent bgColor={'orange'} width={'100%'} height={1} />
            </View>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { userLogin: state.users.userLogin, products: state.products.products, users: state.users.users };
};
export default connect(mapStateToProps)(OrderScreen);
