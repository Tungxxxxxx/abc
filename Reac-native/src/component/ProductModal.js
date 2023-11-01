import React, { createRef } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Modal, Dimensions } from 'react-native';
import PriceFormat from './PriceFormat';
import AddQty from './AddQty';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { Button, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as Constant from '../common/Constant';
import AnimatingImage from './AnimatingImage';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal as Modals } from 'react-native-paper';
const screenHeight = Dimensions.get('window').height;
class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
    //Tạo tham chiếu tới component con AnimatingImage để phương thức của con, ref không thay đổi giá trị thuộc tính khi thuôc tính con thay đổi => truyền trực tiếp thuộc tính từ con lên cha
    this.animatingImageRef = createRef();
  }
  setVisibility = () => {
    this.props.handleCloseModal(false);
  };

  upDateQty = (newQty) => {
    this.setState({
      qty: newQty,
    });
  };
  handleAddBagWithQty = (product, qty, userLogin) => {
    this.animatingImageRef.current.startAnimation(2000);
    this.props.AddQtyToBag(product, qty, userLogin);
  };
  handleMuaNgay = () => {
    const { navigation } = this.props;
    navigation.navigate('PayScreen', {
      product: this.props.product,
      qty: this.state.qty,
      userLogin: this.props.userLogin,
    });
    this.props.handleCloseModal(false);
  };
  getXY = (event) => {
    console.log('x1:', event.nativeEvent.x);
    console.log('y1:', event.nativeEvent.y);
  };
  handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    console.log('Tọa độ X1:', x);
    console.log('Tọa độ Y1:', y);
    console.log('Chiều rộng 1:', width);
    console.log('Chiều cao 1:', height);
  };
  onRequestClose = () => {
    this.props.onPressWithoutModal(false);
  };

  render() {
    let animatingRef = null;
    if (this.animatingImageRef.current) {
      animatingRef = this.animatingImageRef.current;
    }
    const { product, textSubmit, visibility, userLogin } = this.props;
    {
      return (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              this.onRequestClose();
            }}
            style={{ width: '100%' }}
          >
            <Modal
              animationType="slide"
              visible={visibility}
              transparent={true}
              onRequestClose={() => {
                this.onRequestClose();
              }}
            >
              <View style={styles.modalContent}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-end' }}>
                  <View style={{ position: 'absolute', zIndex: 9999 }}>
                    <AnimatingImage
                      ref={this.animatingImageRef}
                      animatingProperties={{
                        imgPath: product.avatar,
                        width: 40,
                        height: 40,
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    style={{ width: 150, height: 150, marginRight: 5 }}
                    onPress={(event) => {
                      this.getXY(event);
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={{ width: 150, height: 150 }}
                      source={product.avatar}
                      onLayout={(event) => {
                        this.handleLayout(event);
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={{ color: 'red' }}>
                    <PriceFormat price={product.price} />
                  </Text>
                </View>
                <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                <TouchableOpacity
                  style={{ position: 'absolute', top: 0, right: 0 }}
                  onPress={() => this.setVisibility()}
                >
                  <Icon name="clear" size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>Số lượng</Text>
                  <AddQty upDateQty={this.upDateQty} />
                </View>
                <Divider style={{ marginBottom: 30, marginTop: 10 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'orange',
                      width: '100%',
                      height: 50,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      if (textSubmit === Constant.THEM_VAO_GIO) {
                        {
                          //Nếu hoạt ảnh đang chạy thì không có hành động nào thực hiện
                          animatingRef !== null && animatingRef.setIsAnimatingToParent()
                            ? null
                            : this.handleAddBagWithQty(product, this.state.qty, userLogin);
                          //Khi hoạt ảnh đang chạy thì không được tương tác ấn
                        }
                      } else {
                        this.handleMuaNgay();
                      }
                    }}
                    disabled={animatingRef !== null ? animatingRef.setIsAnimatingToParent() : false}
                  >
                    <Text>{textSubmit}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableWithoutFeedback>
        </>
      );
    }
  }
}
const styles = StyleSheet.create({
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: screenHeight * 0.6,
    minHeight: screenHeight * 0.3,
    backgroundColor: '#fff',
    padding: 5,
  },
});
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddQtyToBag: (product, qty, userLogin) =>
      dispatch({ type: 'ADD_QTY_TO_BAG', payload: { product: product, qty: qty, userLogin: userLogin } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
