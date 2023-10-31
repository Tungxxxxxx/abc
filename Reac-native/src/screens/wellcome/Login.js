import React from 'react';
import { ActivityIndicator, Alert, View, Text, TouchableOpacity, Image } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from '@rneui/themed';

import Loading from '../../component/Loading';
import { Divider } from '@rneui/themed';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forgetPass: false,
      isChecked: true,
      isPassDisPlay: true,
    };
  }
  displayPass = () => {
    this.setState({
      isPassDisPlay: !this.state.isPassDisPlay,
    });
  };
  toggleCheckbox = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  handleClickForgetPass = () => {
    this.setState({
      forgetPass: true,
    });
  };

  render() {
    const { forgetPass, isChecked, isPassDisPlay } = this.state;
    const { username, pass, isLoading } = this.props.loginInfo;
    // console.log('>>>Check props:', username, pass, isLoading);
    return (
      <View>
        <View>{isLoading ? <Loading /> : null}</View>
        <TextInput
          style={{ marginTop: 10 }}
          label="Tài khoản"
          mode="outlined"
          right={<TextInput.Icon icon={'account'} />}
          value={username}
          onChangeText={(val) => {
            this.props.handleChangeUsername(val);
            console.log(val);
          }}
        />
        <TextInput
          style={{ marginTop: 10 }}
          label="Mật khẩu"
          mode="outlined"
          secureTextEntry={isPassDisPlay ? false : true}
          right={
            <TextInput.Icon
              icon={isPassDisPlay ? 'eye-off' : 'eye'}
              onPress={() => {
                this.displayPass();
              }}
            />
          }
          value={pass}
          onChangeText={(val) => {
            this.props.handleChangePass(val);
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
          <BouncyCheckbox
            isChecked={isChecked}
            size={15}
            fillColor="rgb(57, 58, 52)"
            // unfillColor="#FFFFFF"
            text="Ghi nhớ đăng nhập"
            iconStyle={{ borderColor: 'rgb(57, 58, 52)' }}
            innerIconStyle={{ borderWidth: 2 }}
            // textStyle={{ fontFamily: 'JosefinSans-Regular' }}
            textStyle={{
              textDecorationLine: 'none',
              fontSize: 15,
            }}
            onPress={() => this.toggleCheckbox()}
          />
          <TouchableOpacity
            onPress={() => {
              this.handleClickForgetPass();
            }}
          >
            <Text style={{ color: forgetPass ? 'rgb(227, 17, 108)' : 'rgb(0, 0, 159)' }}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Button
            style={{ backgroundColor: 'rgba(111, 202, 186, 1)', width: '80%', justifyContent: 'center' }}
            onPress={() => {
              this.props.handleLogin(username, pass);
            }}
          >
            <Text style={{ color: 'rgb(57, 58, 52)' }}>Đăng nhập</Text>
          </Button>
          <View style={{ alignItems: 'center', width: '20%' }}>
            <Icon name="fingerprint" color={'rgba(111, 202, 186, 1)'} size={50} />
          </View>
        </View>
        <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Divider style={{ height: 2, width: '20%', color: 'blue' }} />
          <Text>Hoặc đăng nhập với</Text>
          <Divider style={{ height: 2, width: '20%' }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '60%',
            alignSelf: 'center',
            paddingTop: 20,
          }}
        >
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/facebook.png')} />
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/GG.png')} />
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/twitter.png')} />
        </View>
      </View>
    );
  }
}
export default Login;
