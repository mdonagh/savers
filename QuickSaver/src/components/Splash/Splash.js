/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { Button } from '../ui';
import { login, clearServerError } from '../../actions/User';
import { getSession } from '../../actions/Session';

import styles from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigation = props.navigation;
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession = async () => {
    const { dispatch } = this.props;
    const { session = '0', email = '', password = '' } = await getSession();
    if (session === '1') {
      const resp = await dispatch(login(email, password));
      if (resp && resp.body) {
        this.navToHome();
      }
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } else {
      SplashScreen.hide();
    }
  };

  navToSignUp = () => {
    this.navigation.navigate('SignUp');
  };

  navToLogin = () => {
    this.navigation.navigate('Login');
  };

  navToHome = () => {
    const { serverError, resetPassword } = this.props;
    if (resetPassword) {
      this.navigation.navigate('ResetPassword');
      return;
    }
    this.navigation.navigate('Tabs');
  };

  handleChange = (key, val) => {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.setState({
      [key]: val,
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <View style={styles.topSection}>
                <Image
                  style={styles.mainLogoTop}
                  source={require('../../assets/Bank.png')}
                />
              </View>

              <View style={styles.middleSection}>
                <Button style={1} name="LOG IN" onPress={this.navToLogin} />
                <Button style={2} name="CREATE ACCOUNT" onPress={this.navToSignUp} />
              </View>

              <View style={styles.bottomSection}>
                <Image
                  style={styles.mainLogo}
                  source={require('../../assets/Logo-Block.png')}
                />
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  serverError: state.user.serverError,
  resetPassword: state.user.resetPassword,
});

export default connect(mapStateToProps)(Splash);
