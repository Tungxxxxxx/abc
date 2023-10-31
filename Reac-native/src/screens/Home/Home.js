import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import BagScreen from './BagScreen';
import OrderScreen from './OrderScreen';
import ProductScreen from './ProductScreen';
import IconWithBadge from '../../component/IconWithBadge';
import React from 'react';
import Appbar from '../../component/Appbar';
import NotificationScreen from './NotificationScreen';
import UserInfoScreen from './UserInfoScreen';
import SupportScreen from './SupportScreen';
import { Avatar } from 'react-native-paper';
import * as Constant from '../../common/Constant';
import { StatusBar, Text } from 'react-native';
import APIScreen from './APIScreen';
const Tab = createMaterialTopTabNavigator();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    };
  }
  handleSearchProduct = (val) => {
    this.setState({
      searchVal: val,
    });
    this.props.OnchangeSearch(val);
  };
  //Lưu giá trị navigation vào redux để sử dụng trong ứng dụng
  componentDidMount() {
    this.props.SetNavigation(this.props.navigation);
  }
  render() {
    const { userLogin } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#e1f0ff" barStyle="dark-content" />
        <Appbar handleSearchProduct={this.handleSearchProduct} searchVal={this.state.searchVal} />
        <Tab.Navigator
          initialRouteName="Products"
          screenOptions={{
            tabBarInactiveTintColor: 'rgba(111, 202, 186, 1)',
            tabBarIndicatorStyle: {
              backgroundColor: 'orange',
            },
            tabBarStyle: {
              height: 45,
              backgroundColor: '#e1f0ff',
            },
          }}
        >
          {/* Sử dụng Children props */}
          <Tab.Screen
            name="Products"
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="home" color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'} size={24} />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <ProductScreen navigation={this.props.navigation} searchVal={this.state.searchVal} />}
          </Tab.Screen>
          <Tab.Screen
            name="Order"
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="shopping-bag" color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'} size={24} />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <OrderScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="shoppingBag"
            options={{
              tabBarIcon: ({ focused }) => (
                <IconWithBadge
                  badgeCount={this.props.countPIB}
                  name={'shopping-cart'}
                  color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'}
                  size={24}
                />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <BagScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="notifications"
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="notifications" color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'} size={24} />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <NotificationScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="Support"
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon name="chat" color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'} size={24} />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <SupportScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="API"
            options={{
              tabBarIcon: ({ focused }) => (
                <Text color={focused ? 'orange' : 'rgba(111, 202, 186, 1)'} style={{ fontSize: 15 }}>
                  API
                </Text>
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <APIScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="User"
            options={{
              tabBarIcon: () => <Avatar.Image size={24} source={userLogin.avatar} />,
              title: '',
              headerShown: false,
            }}
          >
            {() => <UserInfoScreen />}
          </Tab.Screen>
        </Tab.Navigator>
      </>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnchangeSearch: (searchVal) => dispatch({ type: 'SEARCH', payload: { searchVal: searchVal } }),
    SetNavigation: (navigation) => dispatch({ type: Constant.SET_NAVIGATION, payload: { navigation: navigation } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
