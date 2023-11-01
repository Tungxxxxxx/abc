import { Icon } from '@rneui/themed';
import React from 'react';
import { connect } from 'react-redux';
import PriceFormat from '../../component/PriceFormat';
import { Divider } from 'react-native-paper';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
//Icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//styles
import { dividerStyle } from '../../styles';
//alert
import { alertMess } from '../../component/ALertFunc';
import * as Message from '../../common/Message';
import AlertMess from '../../component/AlertMess';
import { KIEM_TRA_DON_HANG, NAP_TIEN } from '../../common/Constant';
class PayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDialog: false,
      button1: '',
      button2: '',
      content: '',
    };
  }

  handlePay = (payments, wallet) => {
    const walletBalance = wallet - payments;
    if (walletBalance >= 0) {
      this.setState({
        visibleDialog: true,
        button1: KIEM_TRA_DON_HANG,
        button2: 'Trở lại',
        content: Message.PAY_SUCCESS,
      });
    } else {
      this.setState({
        visibleDialog: true,
        button1: NAP_TIEN,
        button2: 'Trở lại',
        content: Message.PAY_ERROR,
      });
    }
  };
  hideDialog = () => {
    this.setState({
      visibleDialog: false,
    });
  };
  sumProductsPrice = (products) => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.product.price * product.qty;
    });
    return sum;
  };
  render() {
    try {
      if (!this.props.userLogin) {
        this.props.navigation.navigate('Main');
      }
      const { products } = this.props.route.params;
      const { userLogin } = this.props;
      console.log('products', products);
      const shipFee = 30000;
      const goodsMoney = this.sumProductsPrice(products);
      const payments = goodsMoney + shipFee;
      return (
        <View style={styles.container}>
          <View style={styles.address}>
            <View style={styles.addressHeader}>
              <Icon name="location-pin" size={24} color={'rgba(111, 202, 186, 1)'} />
              <Text>Địa chỉ nhận hàng</Text>
            </View>
            <Text>{userLogin.address}</Text>
          </View>
          <Divider style={dividerStyle} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            numColumns={1}
            keyExtractor={(item) => item.product.id.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.product}>
                  <Image style={styles.productImage} source={item.product.avatar} />
                  <View style={styles.productContent}>
                    <Text>{item.product.title}</Text>
                    <Text>
                      <PriceFormat price={item.product.price} />
                    </Text>
                    <Text>Số lượng: {item.qty}</Text>
                  </View>
                </View>
              );
            }}
          />

          <Divider style={dividerStyle} />
          <View style={styles.payDetail}>
            <View style={styles.payDetailItem}>
              <View style={styles.payDetailHeader}>
                <MaterialCommunityIcons name="view-list-outline" size={24} color={'rgba(111, 202, 186, 1)'} />
                <Text>Chi tiết thanh toán</Text>
              </View>
            </View>
            <View style={styles.payDetailItem}>
              <Text>Tổng tiền hàng</Text>
              <Text>
                <PriceFormat price={goodsMoney} />
              </Text>
            </View>
            <View style={styles.payDetailItem}>
              <Text>Phí vận chuyển</Text>
              <Text>
                <PriceFormat price={shipFee} />
              </Text>
            </View>
            <View style={styles.payDetailItem}>
              <Text style={{ fontWeight: 'bold' }}>Tổng thanh toán</Text>
              <Text style={{ color: 'red' }}>
                <PriceFormat price={payments} />
              </Text>
            </View>
          </View>
          <Divider style={dividerStyle} />
          <View style={styles.wallet}>
            <Text>Số dư ví</Text>
            <Text style={{ color: 'green' }}>
              <PriceFormat price={userLogin.money} />
            </Text>
          </View>
          <View style={styles.wallet}>
            <Text>Còn lại</Text>
            <Text style={{ color: userLogin.money - payments >= 0 ? 'green' : 'red' }}>
              <PriceFormat price={userLogin.money - payments} />
            </Text>
          </View>
          <Divider style={dividerStyle} />
          <View style={styles.submit}>
            <TouchableOpacity
              style={styles.touchSubmit}
              onPress={() => {
                this.handlePay(payments, userLogin.money);
              }}
            >
              <Text>Đặt hàng</Text>
            </TouchableOpacity>
          </View>
          <AlertMess
            payDialog={{
              visibleDialog: this.state.visibleDialog,
              button1: this.state.button1,
              button2: this.state.button2,
              content: this.state.content,
            }}
            hideDialog={this.hideDialog}
          />
        </View>
      );
    } catch (error) {
      return (
        <View>
          <Text>App đang được bảo trì:</Text>
          <Text>{error.message}</Text>
          <Text>{JSON.stringify(this.props.route.params)}</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 5 },
  address: { width: '100%' },
  addressHeader: { flexDirection: 'row', alignItems: 'center' },
  product: { width: '100%', height: 100, flexDirection: 'row' },
  productImage: { width: 100, height: 100, marginLeft: 20, marginRight: 10 },
  productContent: { flexDirection: 'column', justifyContent: 'flex-end' },
  payDetail: { width: '100%' },
  payDetailHeader: { flexDirection: 'row', alignItems: 'center' },
  payDetailItem: { width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
  submit: { width: '100%', height: 50, justifyContent: 'flex-end' },
  touchSubmit: {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: { width: '100%', flexDirection: 'row', justifyContent: 'space-between' },
});
const mapStateToProps = (state) => {
  return { userLogin: state.userLogin.userLogin, navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(PayScreen);
