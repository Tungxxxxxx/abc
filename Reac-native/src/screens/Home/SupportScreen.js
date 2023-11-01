import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import { connect } from 'react-redux';
var e;
class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usersConnected: [], isShowChatBox: false };
    e = this;
    if (this.props.socketIO) {
      this.props.socketIO.on('userConnects', (users) => {
        e.setState({
          usersConnected: users,
        });
      });
    }
  }
  handleOpenChatBox = (user) => {
    this.props.navigation.navigate('ChatBox', { user: user });
  };
  render() {
    const { usersConnected } = this.state;
    console.log(usersConnected);
    return (
      <View style={{ width: '100%', padding: 5 }}>
        <View
          style={{
            width: '100%',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          {usersConnected.map((item, i) => {
            return (
              <View
                key={item.user.id}
                style={{ marginLeft: 10, width: '25%', height: '100%', justifyContent: 'center' }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.handleOpenChatBox(item.user);
                  }}
                >
                  <Image
                    source={item.user.avatar}
                    style={{ width: 80, height: 80, borderRadius: 50, borderWidth: 5, borderColor: 'green' }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: 'column' }}>
          {usersConnected.map((item, i) => {
            return (
              <View key={item.user.id} style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.handleOpenChatBox(item.user);
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={item.user.avatar}
                      style={{
                        marginRight: 10,
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                      }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ fontFamily: 'Nunito_SemiBold' }}>{item.user.name}</Text>
                      <Text style={{ fontFamily: 'Nunito_Regular' }}>{item.user.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { socketIO: state.socketIO.socket, navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(SupportScreen);
