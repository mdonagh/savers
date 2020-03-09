import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Foundation';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Feather';

import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import ForgotPassword from './src/components/ForgotPassword';
import ResetPassword from './src/components/ResetPassword';

import Home from './src/components/Home';
import Catagories from './src/components/Catagories';
import Payment from './src/components/Payment';

import Favorites from './src/components/Favorites';
import MessageBoard from './src/components/MessageBoard';
import Deals from './src/components/Deals';
import DealView from './src/components/DealView';
import Profile from './src/components/Profile';
import Splash from './src/components/Splash';
import PrivacyPolicy from './src/components/PrivacyPolicy';
import TOS from './src/components/TOS';

// Tabs Wrapper
const Tabs = createBottomTabNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: null } },
    Favorites: { screen: Favorites, navigationOptions: { header: null } },
    MessageBoard: { screen: MessageBoard, navigationOptions: { header: null } },
    Deals: { screen: Deals, navigationOptions: { header: null } },
    Profile: { screen: Profile, navigationOptions: { header: null } },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Home':
            return <Icon name="home" size={25} color={tintColor} />;
          case 'Favorites':
            return <IconAnt name="hearto" size={25} color={tintColor} />;
          case 'MessageBoard':
            return <IconM name="comment-outline" size={25} color={tintColor} />;
          case 'Deals':
            return <IconF name="shopping-cart" size={25} color={tintColor} />;
          case 'Profile':
            return <IconAnt name="user" size={25} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#01BCE8',
      inactiveTintColor: '#BEBEBE',
      showLabel: false,
      lazy: true,
    },
  },
);

const App = createStackNavigator({
  Splash: { screen: Splash, navigationOptions: { header: null } },
  Login: { screen: Login, navigationOptions: { header: null } },
  SignUp: { screen: SignUp, navigationOptions: { header: null } },
  ForgotPassword: { screen: ForgotPassword, navigationOptions: { header: null } },
  ResetPassword: { screen: ResetPassword, navigationOptions: { header: null } },
  Tabs: { screen: Tabs, navigationOptions: { gesturesEnabled: false, header: null } },
  Catagories: { screen: Catagories, navigationOptions: { header: null } },
  DealView: { screen: DealView, navigationOptions: { header: null } },
  Payment: { screen: Payment, navigationOptions: { header: null } },
  TOS: { screen: TOS, navigationOptions: { header: null } },
  PrivacyPolicy: { screen: PrivacyPolicy, navigationOptions: { header: null } },
});

export default createAppContainer(App);
