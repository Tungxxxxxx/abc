import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      phone: '',
      email: '',
    };
  }
  render() {
    const { username, pass, phone, email } = this.state;
    return (
      <View>
        <TextInput
          style={{ marginTop: 10 }}
          label="Tài khoản"
          mode="outlined"
          right={<TextInput.Icon icon={'account'} />}
          value={username}
          onChangeText={(val) => {
            this.handleChangeUsername(val);
            console.log(val);
          }}
        />
        <TextInput
          style={{ marginTop: 10 }}
          label="Mật khẩu"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon={'eye'} />}
          value={pass}
          onChangeText={(val) => {
            this.handleChangePass(val);
          }}
        />
        <TextInput
          style={{ marginTop: 10 }}
          label="Email"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon={'email'} />}
          value={pass}
          onChangeText={(val) => {
            this.handleChangePass(val);
          }}
        />
        <TextInput
          style={{ marginTop: 10 }}
          label="Số điện thoại"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon={'phone'} />}
          value={pass}
          onChangeText={(val) => {
            this.handleChangePass(val);
          }}
        />
        <Button
          style={{ backgroundColor: 'rgba(111, 202, 186, 1)', width: '100%', justifyContent: 'center', marginTop: 15 }}
          onPress={() => {
            this.props.handleLogin(username, pass);
          }}
        >
          <Text style={{ color: 'rgb(57, 58, 52)' }}>Đăng ký</Text>
        </Button>
      </View>
    );
  }
}
export default Signin;
