import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screens/Home/ProductScreen';
import ProductDetail from '../screens/Product/ProductDetail';
const ProductStack = createStackNavigator();
class ProductStackScreen extends React.Component {
  render() {
    return (
      <ProductStack.Navigator>
        <ProductStack.Screen name="ProductScreen" options={{ headerShown: false }}>
          {() => <ProductScreen searchVal={this.props.searchVal} />}
        </ProductStack.Screen>
        <ProductStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
      </ProductStack.Navigator>
    );
  }
}
export default ProductStackScreen;
