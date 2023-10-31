import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
// import { Users } from '../model/user';
import { Backgrounds } from '../../model/backgrounds';
import Login from './Login';
import Signup from './Signup';
//import connect để kết nối redux
import { connect } from 'react-redux';
import io from 'socket.io-client';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      isLoading: false,
      page: 'LOG_IN',
      bgHeader: [
        require('../../assets/images/banners/online-shopping-on-mobile-phone.jpg'),
        // require('../assets/images/tx2.jpg'),
        // require('../assets/images/tx3.jpg'),
        // require('../assets/images/tx4.jpeg'),
      ],
      currentIndex: 0,
    };
  }

  handleClickLogin = () => {
    this.setState({
      page: 'LOG_IN',
    });
  };
  handleClickSignup = () => {
    this.setState({
      page: 'SIGN_UP',
    });
  };
  componentDidMount() {
    this.startImageCarousel();
  }
  startImageCarousel = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
      }));
    }, 1000); // 5 seconds
  };
  componentDidMount() {
    setTimeout(() => {
      Backgrounds.map((item, i) => {});
    });
  }
  handleClickSignup111 = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  handleChangeUsername = (val) => {
    this.setState({
      username: val,
    });
  };
  handleChangePass = (val) => {
    this.setState({
      pass: val,
    });
  };

  handleLogin = (username, pass) => {
    this.setState({
      isLoading: true,
    });
    const users = this.props.users;
    // Trả về mảng user thoả mãn
    const foundUser = users.filter((item) => {
      return item.username === username && item.password === pass;
    });
    // Alert.alert(foundUser);
    if (username === '') {
      Alert.alert('Lỗi đăng nhập', 'Tài khoản không được trống', [{ text: 'OK' }]);
      this.setState({
        isLoading: false,
      });
      return;
    }
    if (pass === '') {
      this.setState({
        isLoading: false,
      });
      Alert.alert('Lỗi đăng nhập', 'Mật khẩu không được trống', [{ text: 'OK' }]);
      return;
    }
    if (!foundUser || foundUser.length === 0) {
      this.setState({
        isLoading: false,
      });
      Alert.alert('Lỗi đăng nhập', 'Tài khoản hoặc mật khẩu không đúng', [{ text: 'OK' }]);
      return;
    }
    //Gửi action tới redux, lưu giá trị usẻ vừa login thành công vào store
    this.props.SetLoginUser(foundUser[0]);
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('Home', { screen: 'HomeScreen' });
    }, 0);
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1000);
    // Su dung socket.io
    const socket = io('http://192.168.38.117:3000');
    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server', socket.id);
      socket.emit('login', foundUser[0]);
    });
  };
  handleForgetPass() {
    // this.props.navigation.navigate('ProductScreen');
  }
  render() {
    const { page, bgHeader, currentIndex } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <ImageBackground style={{ resizeMode: 'cover', height: '100%', margin: 0 }} source={bgHeader[currentIndex]}>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 0 }}></View>
          </ImageBackground>
        </View>
        <View style={{ height: 50, width: '100%', flexDirection: 'row', backgroundColor: '#f6f7f8' }}>
          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.handleClickLogin();
            }}
          >
            <Text style={{ color: 'rgb(57, 58, 52)', fontSize: 20 }}>Đăng nhập</Text>
            {page === 'LOG_IN' ? (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: 'rgb(57, 58, 52)',
                  position: 'absolute',
                  bottom: 0,
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.handleClickSignup();
            }}
          >
            <Text style={{ color: 'rgb(57, 58, 52)', fontSize: 20 }}>Đăng ký</Text>
            {page === 'SIGN_UP' ? (
              <View
                style={{
                  height: 1,
                  position: 'absolute',
                  width: '100%',
                  backgroundColor: 'rgb(57, 58, 52)',
                  bottom: 0,
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          {page === 'LOG_IN' ? (
            <Login
              handleLogin={this.handleLogin}
              handleChangeUsername={this.handleChangeUsername}
              handleChangePass={this.handleChangePass}
              loginInfo={{ username: this.state.username, pass: this.state.pass, isLoading: this.state.isLoading }}
            />
          ) : (
            <Signup />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '25%',
    // backgroundColor: 'green',
    padding: 0,
    margin: 0,
  },
});
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { users: state.users.users, userLogin: state.userLogin.userLogin };
};
// gửi actions tới store của redux và thêm nó vào props của component, sau khi gửi thì redux nhận action ở hàm rootReducer(state,action)
const mapDispatchToProps = (disPatch) => {
  //Trả về một đối tượng
  return {
    // dispatch 1 đối tượng có thuộc tính type: tên action và payload
    SetLoginUser: (userLogin) => disPatch({ type: 'SET_USER_LOGIN', payload: { userLogin: userLogin } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
