import React from 'react';
import { View } from 'react-native';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
//import connect để kết nối redux
import { connect } from 'react-redux';
class AppbarComponent extends React.Component {
  _handleSearch = () => {
    // Alert.alert('ssssssssssss');
  };
  _showActivity = () => {};
  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '', // Màu chính (dùng cho đường viền và nền)
      },
    };
    const { avatar } = this.props.userLogin;
    // console.log('>>>> check props Main=>', this.props);
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header
          style={{
            width: '100%',
            height: 60,
            marginTop: 0,
            backgroundColor: '#e1f0ff',
            justifyContent: 'space-between',
          }}
        >
          <Avatar.Image size={40} source={avatar} />
          {/* <Appbar.Content title={`Xin chào ${nickname}`} /> */}
          {/* <Appbar.Action icon="magnify" color="#0091ff" onPress={this._handleSearch()} /> */}
          <TextInput
            selectionColor={theme.colors.primary} // Màu khi focus
            underlineColor="transparent"
            style={{
              width: '70%',
              borderBottomColor: '#1877F2',
              backgroundColor: '#fff',
              selectionColor: '#1877F2',
              height: 40,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            // label="Tìm kiếm"
            mode="flat"
            right={<TextInput.Icon icon={'magnify'} color={'#0091ff'} />}
            onChangeText={(val) => {
              this._handleSearch(val);
            }}
          />
          <Appbar.Action icon="bell" color="#0091ff" onPress={this._showActivity()} />
        </Appbar.Header>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
      </PaperProvider>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { users: state.users.users, userLogin: state.userLogin.userLogin };
};
export default connect(mapStateToProps, null)(AppbarComponent);
