import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { TextBold, TextItalic, TextNormal } from '../../component/TextCustom';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      phone: '',
      email: '',
    };
  }
  handleChangeUsername = (val) => {};
  handleChangePass = (val) => {};
  handleChangeEmail = (val) => {};
  handleChangePhone = (val) => {};
  render() {
    const { username, pass, phone, email } = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
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
          style={styles.textInput}
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
          style={styles.textInput}
          label="Email"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon={'email'} />}
          value={email}
          onChangeText={(val) => {
            this.handleChangeEmail(val);
          }}
        />
        <TextInput
          style={styles.textInput}
          label="Số điện thoại"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon={'phone'} />}
          value={phone}
          onChangeText={(val) => {
            this.handleChangePhone(val);
          }}
        />
        <Button
          style={{ backgroundColor: 'rgba(111, 202, 186, 1)', width: '100%', justifyContent: 'center', marginTop: 15 }}
          onPress={() => {
            this.props.handleLogin(username, pass);
          }}
        >
          <TextNormal style={{ color: 'rgb(57, 58, 52)' }}>Đăng ký</TextNormal>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    fontFamily: 'Nunito_ExtraLight',
  },
});
export default Signup;
