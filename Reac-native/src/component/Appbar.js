import { Icon } from '@rneui/base';
import React from 'react';
import { View, Image, Text } from 'react-native';
//import connect để kết nối redux
import { connect } from 'react-redux';
import PriceFormat from './PriceFormat';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
class Appbar extends React.Component {
  _handleSearch = () => {
    // Alert.alert('ssssssssssss');
  };
  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '', // Màu chính (dùng cho đường viền và nền)
      },
    };
    const { searchVal } = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: 45,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#e1f0ff',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange', width: '25%' }}>Su Shop</Text>
        <TextInput
          underlineColor="transparent"
          selectionColor="transparent"
          style={{
            width: '72%',
            height: 35,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          right={<TextInput.Icon icon={'magnify'} color={'#0091ff'} />}
          value={searchVal}
          onChangeText={(val) => {
            this.props.handleSearchProduct(val);
          }}
        />
      </View>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { users: state.users.users, userLogin: state.userLogin.userLogin };
};

export default connect(mapStateToProps, null)(Appbar);
