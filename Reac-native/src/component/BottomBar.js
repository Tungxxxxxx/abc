import { Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import ProductModal from './ProductModal';
import * as Constant from '../common/Constant';
import { TextNormal } from './TextCustom';
class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false, textSubmit: '' };
  }
  handleOpenModal = (textSubmit) => {
    this.setState({ visibility: true, textSubmit: textSubmit });
  };
  handleCloseModal = (visibility) => {
    this.setState({ visibility: visibility });
  };
  onPressWithoutModal = (visibility) => {
    this.setState({
      visibility: visibility,
    });
  };
  render() {
    const { visibility, textSubmit } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buyButton}>
          <TouchableOpacity style={styles.touch}>
            <Icon name="chat" size={24} color={'#EE4E34'} />
          </TouchableOpacity>
        </View>
        <View style={styles.buyButton}>
          <TouchableOpacity onPress={() => this.handleOpenModal(Constant.THEM_VAO_GIO)}>
            <Icon name="add-shopping-cart" size={24} color={'#EE4E34'} />
          </TouchableOpacity>
        </View>
        <View style={styles.buyButton}>
          <TouchableOpacity onPress={() => this.handleOpenModal(Constant.MUA_NGAY)}>
            <TextNormal style={{ color: '#EE4E34' }}>Mua ngay</TextNormal>
          </TouchableOpacity>
        </View>
        {visibility ? (
          <ProductModal
            handleCloseModal={this.handleCloseModal}
            visibility={visibility}
            product={this.props.product}
            textSubmit={textSubmit}
            handleAddBagWithQty={this.props.handleAddBagWithQty}
            navigation={this.props.navigation}
            onPressWithoutModal={this.onPressWithoutModal}
          />
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyButton: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#FCEDDA',
    alignItems: 'center',
  },
  touch: {
    justifyContent: 'center',
  },
});
export default BottomBar;
