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
import { TextInput, Button, BackButton } from '../ui';
import { login, clearServerError } from '../../actions/User';
import { getSession } from '../../actions/Session';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorText: '',
    };
    this.navToSignUp = this.navToSignUp.bind(this);
    this.navToForgotPassword = this.navToForgotPassword.bind(this);
    this.navToHome = this.navToHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.navigation = props.navigation;
  }

  componentDidMount() {
    this.checkSession();
  }

  async checkSession() {
    const { dispatch } = this.props;
    const { session = '0', email = '', password = '' } = await getSession();
    if (session === '1') {
      await dispatch(login(email, password));
      this.navToHome();
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } else {
      SplashScreen.hide();
    }
  }

  navToSignUp() {
    const { dispatch } = this.props;
    this.setState({
      email: '',
      password: '',
      errorText: '',
    });
    dispatch(clearServerError());
    this.navigation.navigate('SignUp');
  }

  navToForgotPassword() {
    const { dispatch } = this.props;
    this.setState({
      email: '',
      password: '',
      errorText: '',
    });
    dispatch(clearServerError());
    this.navigation.navigate('ForgotPassword');
  }

  navToHome() {
    const { serverError, resetPassword } = this.props;
    const { errorText } = this.state;
    if (!errorText && !serverError) {
      this.setState({
        email: '',
        password: '',
        errorText: '',
      });
      if (resetPassword) {
        this.navigation.navigate('ResetPassword');
        return;
      }
      this.navigation.navigate('Tabs');
    }
  }

  handleChange(key, val) {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.setState({
      [key]: val,
    });
  }

  isValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  async handleLogin() {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        errorText: 'Email and password required.',
      });
    } else if (!this.isValid(email)) {
      this.setState({
        errorText: 'Invalid email.',
      });
    } else {
      this.setState({
        errorText: '',
      });
      dispatch(clearServerError());
      await dispatch(login(email, password));
      this.navToHome();
    }
  }

  render() {
    const { email, password, errorText } = this.state;
    const { serverError } = this.props;

    let error = serverError;
    if (errorText) {
      error = errorText;
    }
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <View style={styles.topSection}>
                <Image
                  style={styles.mainLogo}
                  source={require('../../assets/Logo-Block.png')}
                />
              </View>
              <View style={styles.middleSection}>
                <Text style={styles.error}>{error}</Text>
                <TextInput
                  placeholder="Email"
                  onChange={this.handleChange.bind(this, 'email')}
                  value={email}
                />
                <TextInput
                  placeholder="Password"
                  secure
                  onChange={this.handleChange.bind(this, 'password')}
                  value={password}
                />
                <TouchableOpacity
                  style={{ width: '70%', alignItems: 'flex-end' }}
                  onPress={this.navToForgotPassword}
                >
                  <Text style={styles.forgotPassword}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.middleSection}>
                <Button style={1} name="LOG IN" onPress={this.handleLogin} />
              </View>
              <BackButton onPress={() => this.navigation.pop()} />
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

export default connect(mapStateToProps)(Login);
