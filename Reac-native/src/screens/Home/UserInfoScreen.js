import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
var e;
class UserInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    e = this;
    this.state = {
      users: [],
    };
    this.socket = io('http://192.168.38.117:3000');
    this.socket.on('userConnects', (users) => {
      e.setState({
        users: users,
      });
    });
  }
  handleLogout = () => {
    this.props.navigation.navigate('Main');
    this.socket.emit('logout', this.props.userLogin);
  };
  componentDidMount() {}
  render() {
    console.log(this.state.users);
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
          {this.state.users &&
            this.state.users.length > 0 &&
            this.state.users.map((item, i) => {
              return <Text key={item.id}>{item.id}</Text>;
            })}
          <Text>Thông báo</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation, userLogin: state.userLogin.userLogin };
};
export default connect(mapStateToProps)(UserInfoScreen);
