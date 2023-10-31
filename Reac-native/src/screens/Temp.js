import React from 'react';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
//import connect để kết nối redux
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
class Temp extends React.Component {
  handleLogin = () => {
    this.props.SetLoginUser(12312);
  };
  render() {
    console.log(this.props);
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.handleLogin();
          }}
        >
          <View style={{ height: 50, width: '80%', backgroundColor: 'orange' }}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { users: state.users.users, userLogin: state.userLogin.userLogin };
};
// gửi actions tới store của redux và thêm nó vào props của component, sau khi gửi thì redux nhận action ở hàm rootReducer(state,action)
const mapDispatchToProps = (disPatch) => {
  //Trả về một đối tượng
  return {
    // dispatch 1 đối tượng có thuộc tính type: tên action và payload
    SetLoginUser: (userLogin) => disPatch({ type: 'SET_USER_LOGIN', payload: userLogin }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Temp);
