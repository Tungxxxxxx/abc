import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { IP } from '../../common/Constant';
import { Avatar, Divider } from 'react-native-paper';
import { TextBold, TextNormal } from '../../component/TextCustom';
import PriceFormat from '../../component/PriceFormat';
import Ionicons from 'react-native-vector-icons/Ionicons';

var e;
class UserInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    e = this;
    this.state = {
      users: [],
      userLogin: this.props.userLogin,
    };
    this.socket = io(IP);
  }
  handleLogout = () => {
    this.props.navigation.navigate('Main');
    this.socket.emit('logout', this.props.userLogin);
  };
  accessTopUpWallet = (balance) => {
    const { navigation } = this.props;
    navigation.navigate('TopUpWallet', { balance: balance });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.userLogin !== this.props.userLogin) {
      this.setState({ userLogin: this.props.userLogin });
    }
  }
  render() {
    const { userLogin, navigation } = this.state;
    console.log('UserInfoScreen', userLogin.money);
    return (
      <View style={{ paddingTop: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar.Image size={40} source={userLogin.avatar} />
          <TextNormal>{userLogin.nickname}</TextNormal>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <TouchableOpacity style={{ width: '100%' }} onPress={(balance) => this.accessTopUpWallet(userLogin.money)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <TextBold>Số dư ví</TextBold>
              <TextNormal>
                <PriceFormat price={userLogin.money} />
              </TextNormal>
            </View>
            <Ionicons size={20} name="chevron-forward-outline" color={'grey'} family={'Nunito_ExtraLight'} />
          </View>
        </TouchableOpacity>

        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <TouchableOpacity style={{ width: '100%' }} onPress={(balance) => this.accessTopUpWallet(userLogin.money)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <TextBold>Địa chỉ</TextBold>
              <TextNormal>{userLogin.address}</TextNormal>
            </View>
            <Ionicons size={20} name="chevron-forward-outline" color={'grey'} family={'Nunito_ExtraLight'} />
          </View>
        </TouchableOpacity>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <TextBold>Họ và tên</TextBold>
          <TextNormal>{userLogin.name}</TextNormal>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <TextBold>Email</TextBold>
          <TextNormal>{userLogin.email}</TextNormal>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.handleLogout();
            }}
          >
            <TextBold style={{ color: 'red' }}>Đăng xuất</TextBold>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { ToReRendering: state, navigation: state.navigation.navigation, userLogin: state.users.userLogin };
};

export default connect(mapStateToProps)(UserInfoScreen);
