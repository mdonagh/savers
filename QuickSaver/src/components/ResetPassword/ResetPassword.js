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
import { resetPassword, clearServerError } from '../../actions/User';
import { TextInput, Button } from '../ui';
import styles from './styles';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      verifyPassword: '',
      errorText: '',
    }
    this.navToHome = this.navToHome.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.navigation = props.navigation;
  }

  navToHome() {
    this.navigation.navigate('Home');
  }

  async handleReset() {
    const { password, verifyPassword } = this.state;
    const { dispatch, user } = this.props;
    if (password !== verifyPassword) {
      this.setState({
        errorText: 'Password does not match.',
      });
      return;
    }
    resetPassword(user.email, password);
    this.navToHome();
  }

  handleChange(key, val) {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.setState({
      [key]: val,
      errorText: '',
    })
  }

  render() {
    const { password, verifyPassword, errorText } = this.state;
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
                <TextInput
                  placeholder='Password'
                  secure
                  width='80%'
                  value={password}
                  onChange={this.handleChange.bind(this, 'password')}
                />
                <TextInput
                  placeholder='Verify Password'
                  secure
                  width='80%'
                  value={verifyPassword}
                  onChange={this.handleChange.bind(this, 'verifyPassword')}
                />
              </View>
              <View style={styles.bottomSection}>
                <Button
                  name='RESET PASSWORD'
                  style={1}
                  onPress={this.handleReset}
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
});

export default connect(mapStateToProps)(ResetPassword);
