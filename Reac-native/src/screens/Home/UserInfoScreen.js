import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { IP } from '../../common/Constant';
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
    const users = e.state.users;
    // console.log(users);
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.handleLogout();
            }}
          >
            <Text>Đăng xuất</Text>
          </TouchableOpacity>
          <Text>{JSON.stringify(users)}</Text>
          <TouchableOpacity
            onPress={() => {
              this.handleLogin();
            }}
          >
            <Text>Thông báo</Text>
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
