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
  handleOpenChatBox = () => {
    this.setState({ isShowChatBox: true });
  };
  render() {
    const { usersConnected } = this.state;
    console.log(usersConnected);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
          {usersConnected.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.handleOpenChatBox();
                }}
              >
                <Image key={item.id} source={item.user.avatar} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Modal visible={this.state.isShowChatBox}></Modal>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { socketIO: state.socketIO.socket };
};
export default connect(mapStateToProps)(SupportScreen);
