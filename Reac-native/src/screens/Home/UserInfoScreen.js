import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { IP } from '../../common/Constant';
import { Avatar, Divider } from 'react-native-paper';

var e;
class UserInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    e = this;
    this.state = {
      users: [],
    };
    this.socket = io(IP);
  }
  handleLogout = () => {
    this.props.navigation.navigate('Main');
    this.socket.emit('logout', this.props.userLogin);
  };
  handleLogin = () => {
    // this.socket.emit('login', this.props.userLogin);
  };
  componentDidMount() {
    this.socket.on('userConnects', (users) => {
      e.setState({
        users: users,
      });
    });
  }
  render() {
    const { userLogin } = this.props;
    return (
      <View style={{ paddingTop: 10, paddingLeft: 5, paddingRight: 5, paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar.Image size={40} source={userLogin.avatar} />
          <Text style={{ fontFamily: 'Nunito_Regular' }}>{userLogin.nickname}</Text>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <Text style={{ fontFamily: 'Nunito_ExtraBold' }}>Số dư ví</Text>
          <Text style={{ fontFamily: 'Nunito_Regular' }}>{userLogin.money}</Text>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <Text style={{ fontFamily: 'Nunito_ExtraBold' }}>Địa chỉ</Text>
          <Text style={{ fontFamily: 'Nunito_Regular' }}>{userLogin.address}</Text>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <Text style={{ fontFamily: 'Nunito_ExtraBold' }}>Họ và tên</Text>
          <Text style={{ fontFamily: 'Nunito_Regular' }}>{userLogin.name}</Text>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <Text style={{ fontFamily: 'Nunito_ExtraBold' }}>Email</Text>
          <Text style={{ fontFamily: 'Nunito_Regular' }}>{userLogin.email}</Text>
        </View>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.handleLogout();
            }}
          >
            <Text style={{ fontFamily: 'Nunito_ExtraBold', color: 'red' }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation, userLogin: state.userLogin.userLogin };
};

export default connect(mapStateToProps)(UserInfoScreen);
