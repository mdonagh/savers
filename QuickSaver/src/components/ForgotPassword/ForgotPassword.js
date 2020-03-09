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
  Animated,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { forgotPassword, clearServerError } from '../../actions/User';

import { TextInput, Button, BackButton } from '../ui';
import styles from './styles';

const windowHeight = Dimensions.get('window').height;


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      opacity: 0,
      top: windowHeight,
      email: '',
      errorText: '',
    }
    this.navToLogin = this.navToLogin.bind(this);
    this.emailResetPassword = this.emailResetPassword.bind(this);
    this.navigation = props.navigation;
  }

  navToLogin() {
    this.navigation.pop();
  }

  isValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  emailResetPassword() {
    const { email } = this.state;
    if (!this.isValid(email)) {
      this.setState({
        errorText: 'Invalid email.'
      })
      return;
    }
    forgotPassword(email)
    Keyboard.dismiss()
    this.setState({
      height: '100%',
      opacity: 1,
      top: 0,
      errorText: '',
    });
  }

  handleChange(key, val) {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.setState({
      [key]: val,
      errorText: '',
    });
  }

  render() {
    const { opacity, height, top, email, errorText } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <View style={styles.topSection}>
                <Image style={styles.mainLogo} source={require('../../assets/Logo-Block.png')} />
              </View>
              <View style={styles.middleSection}>
                <Text style={styles.error}>{errorText}</Text>
                <Text style={styles.mainText}>Enter your email address</Text>
                <TextInput placeholder='Email' onChange={this.handleChange.bind(this, 'email')} value={email}/>
              </View>
              <View style={styles.bottomSection}>
                <Button style={2} name='CONTINUE' onPress={this.emailResetPassword} />
              </View>
              <Animated.View style={[styles.modalWrapper, { height, opacity, top }]}>
                <View style={styles.modal}>
                  <Text style={styles.modalTitle}>Check your email!</Text>
                  <Text style={styles.modalText}>
                    An email has been sent to you containing a temporary password.
                  </Text>
                  <Button style={1} name='RETURN TO LOGIN' onPress={this.navToLogin} />
                </View>
              </Animated.View>
              <BackButton onPress={this.navToLogin} />
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
});

export default connect(mapStateToProps)(ForgotPassword);
