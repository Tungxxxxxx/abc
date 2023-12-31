import { Icon } from '@rneui/themed';
import React from 'react';
import { connect } from 'react-redux';
import PriceFormat from '../../component/PriceFormat';
import { Divider } from 'react-native-paper';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
//Icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//styles
import { dividerStyle } from '../../styles/styles';
//alert
import { alertMess } from '../../component/ALertFunc';
import * as Message from '../../common/Message';
import AlertMess from '../../component/AlertMess';
import { KIEM_TRA_DON_HANG, NAP_TIEN, LOGIN_USER } from '../../common/Constant';
import { updateOrders } from '../../redux/action/updateOrders';
import { updateUserLogin } from '../../redux/action/updateUserLogin';
import { getUserLogin } from '../../utils/function';
import { updateWallet } from '../../redux/action/updateUserDetails';
import { TextNormal, TextItalic, TextBold } from '../../component/TextCustom';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
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

  handlePay = async (payments, wallet) => {
    const { userLogin, users } = this.props;
    const userId = userLogin.id;
    console.log('userLogin.money1111111', userLogin.money);
    const walletBalance = wallet - payments;
    if (walletBalance >= 0) {
      this.setState({
        visibleDialog: true,
        button1: KIEM_TRA_DON_HANG,
        button2: 'Trở lại',
        content: Message.PAY_SUCCESS,
      });
      const { products } = this.props.route.params;

      const order = {
        id: Math.floor(Math.random() * 100000),
        products: products,
        payments: payments,
        status: 'Chờ lấy hàng',
      };
      this.props.updateWallet(userId, payments);

      this.props.updateOrders(order, userId);
      await this.props.updateUserLogin(getUserLogin(users, userId));
      console.log('userLogin.money', userLogin.money);
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
    console.log('PayScreen', this.props.userLogin.money);
    try {
      if (!this.props.userLogin) {
        this.props.navigation.navigate('Main');
      }
      const { products } = this.props.route.params;
      const { userLogin } = this.props;
      const shipFee = 30000;
      const goodsMoney = this.sumProductsPrice(products);
      const payments = goodsMoney + shipFee;
      return (
        <View style={styles.container}>
          <View style={styles.address}>
            <View style={styles.addressHeader}>
              <Icon name="location-pin" size={24} color={'rgba(111, 202, 186, 1)'} />
              <TextNormal>Địa chỉ nhận hàng</TextNormal>
            </View>
            <TextNormal>{userLogin.address}</TextNormal>
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
                    <TextNormal>{item.product.title}</TextNormal>
                    <TextNormal>
                      <PriceFormat price={item.product.price} />
                    </TextNormal>
                    <TextNormal>Số lượng: {item.qty}</TextNormal>
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
                <TextNormal>Chi tiết thanh toán</TextNormal>
              </View>
            </View>
            <View style={styles.payDetailItem}>
              <TextNormal>Tổng tiền hàng</TextNormal>
              <TextNormal>
                <PriceFormat price={goodsMoney} />
              </TextNormal>
            </View>
            <View style={styles.payDetailItem}>
              <TextNormal>Phí vận chuyển</TextNormal>
              <TextNormal>
                <PriceFormat price={shipFee} />
              </TextNormal>
            </View>
            <View style={styles.payDetailItem}>
              <TextBold>Tổng thanh toán</TextBold>
              <TextNormal style={{ color: 'red' }}>
                <PriceFormat price={payments} />
              </TextNormal>
            </View>
          </View>
          <Divider style={dividerStyle} />
          <View style={styles.wallet}>
            <TextNormal>Số dư ví</TextNormal>
            <TextNormal style={{ color: 'green' }}>
              <PriceFormat price={userLogin.money} />
            </TextNormal>
          </View>
          <View style={styles.wallet}>
            <TextNormal>Còn lại</TextNormal>
            <TextNormal style={{ color: userLogin.money - payments >= 0 ? 'green' : 'red' }}>
              <PriceFormat price={userLogin.money - payments} />
            </TextNormal>
          </View>
          <Divider style={dividerStyle} />
          <View style={styles.submit}>
            <TouchableOpacity
              style={styles.touchSubmit}
              onPress={() => {
                this.handlePay(payments, userLogin.money);
              }}
            >
              <TextNormal>Đặt hàng</TextNormal>
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
          <TextNormal>App đang được bảo trì:</TextNormal>
          <TextNormal>{error.message}</TextNormal>
          <TextNormal>{JSON.stringify(this.props.route.params)}</TextNormal>
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
  return {
    userLogin: state.users.userLogin,
    navigation: state.navigation.navigation,
    users: state.users.users,
  };
};

export default connect(mapStateToProps, { updateOrders, updateUserLogin, updateWallet })(PayScreen);
