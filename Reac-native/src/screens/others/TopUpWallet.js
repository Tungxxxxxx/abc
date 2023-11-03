import React from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Dialog, Divider, Portal } from 'react-native-paper';
import { TextBold, TextNormal } from '../../component/TextCustom';
import { connect } from 'react-redux';
import PriceFormat from '../../component/PriceFormat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateWallet } from '../../redux/action/updateUserDetails';
import { NAP_TIEN_THANH_CONG, NAP_TIEN_THAT_BAI } from '../../common/Constant';
class TopUpWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: '0', isShowAlert: false, message: '' };
  }
  handleChange = (val) => {
    const regex = /^\d+$/;

    this.setState({ change: val });
  };
  handleToUpWallet = () => {
    try {
      this.props.updateWallet(this.props.userLogin.id, parseFloat(this.state.change) * -1);
      this.setState({ isShowAlert: true, message: NAP_TIEN_THANH_CONG + parseFloat(this.state.change) * -1 });
    } catch (error) {
      this.setState({ isShowAlert: true, message: NAP_TIEN_THAT_BAI });
    }
  };
  handleHideDialog = () => {
    this.setState({ isShowAlert: false });
  };
  handleSetMoneyButton = (val) => {
    this.setState({
      change: val,
    });
  };
  render() {
    const { change } = this.state;
    const { userLogin } = this.props;
    return (
      <View style={{ justifyContent: 'center', padding: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="wallet-outline" />
          <TextNormal>{'  '}Số dư</TextNormal>
        </View>
        <TextNormal>
          <PriceFormat price={userLogin.money} />
        </TextNormal>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="add-circle-outline" />
          <TextNormal>{'  '}Số tiền cần nạp</TextNormal>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <TextInput
            style={{
              width: '60%',
              height: 40,
              alignSelf: 'center',
              backgroundColor: '#FCEDDA',
              marginTop: 10,
              fontFamily: 'Nunito_ExtraLight',
              color: 'blue',
            }}
            value={change.toString()}
            onChangeText={(val) => {
              this.handleChange(val);
            }}
          />
          <Button
            style={{ height: 40, backgroundColor: 'orange', width: '30%', alignSelf: 'center', marginTop: 10 }}
            onPress={() => this.handleToUpWallet()}
          >
            <TextNormal>Nạp tiền</TextNormal>
          </Button>
        </View>
        <View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(1000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>1.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(2000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>2.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(5000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>5.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(10000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>10.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(15000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>15.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(20000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>20.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(30000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>30.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(40000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>40.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(50000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>50.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(100000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>100.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(200000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>200.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                mode="outlined"
                style={styles.moneyButton}
                onPress={(val) => {
                  this.handleSetMoneyButton(300000000);
                }}
              >
                <TextNormal style={{ fontSize: 11 }}>300.000.000</TextNormal>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
        <Portal>
          <Dialog visible={this.state.isShowAlert} onDismiss={this.handleHideDialog}>
            <Dialog.Content>
              <TextNormal>{this.state.message}</TextNormal>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  moneyButton: {
    borderWidth: 1,
    borderColor: 'orange',
  },
});
const mapStateToProps = (state) => {
  return { ToReRendering: state, userLogin: state.users.userLogin };
};

export default connect(mapStateToProps, { updateWallet })(TopUpWallet);
