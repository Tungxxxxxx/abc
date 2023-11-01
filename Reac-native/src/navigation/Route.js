import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/wellcome/Main';
import Home from '../screens/Home/Home';
import ProductDetail from '../screens/Product/ProductDetail';
import { connect } from 'react-redux';
import PayScreen from '../screens/Product/PayScreen';
import ChatBox from '../screens/others/ChatBox';
import TopUpWallet from '../screens/others/TopUpWallet';

const Stack = createStackNavigator();

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer fallback={<></>}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="PayScreen" component={PayScreen} options={{ title: 'Thanh toán' }} />
          <Stack.Screen name="ChatBox" component={ChatBox} options={{ headerShown: false }} />
          <Stack.Screen name="TopUpWallet" component={TopUpWallet} options={{ title: 'Nạp tiền' }} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
