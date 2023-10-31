import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={'#EE4E34'}
            style={{ marginRight: 10 }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Image source={user.avatar} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />
          <Text style={{ fontFamily: 'Nunito_ExtraBold' }}>{user.name}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#e1f0ff',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 60,
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              fontFamily: 'Nunito_Light',
              fontSize: 20,
              width: '80%',
              height: 45,
              borderRadius: 10,
              backgroundColor: '#FCEDDA',
            }}
          ></TextInput>
          <Ionicons name="send-sharp" size={40} color={'orange'} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation.navigation,
  };
};
export default connect(mapStateToProps)(ChatBox);
