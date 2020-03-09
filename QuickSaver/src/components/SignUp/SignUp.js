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
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import { TextInput, Button, Spacer, BackButton } from '../ui';
import { signup, clearServerError } from '../../actions/User'
import styles from './styles';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TOSCheck: false,
      privacyPolicyCheck: false,
      name: '',
      email: '',
      password: '',
      verifyPassword: '',
      errorText: '',
    }
    this.navToLogin = this.navToLogin.bind(this);
    this.navToHome = this.navToHome.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.navigation = props.navigation;
  }

  navToLogin() {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.navigation.pop();
  }

  navToHome() {
    const { errorText } = this.state;
    const { serverError, dispatch } = this.props;
    if (!errorText && !serverError) {
      this.setState({
        TOSCheck: false,
        privacyPolicyCheck: false,
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
        errorText: '',
      })
      dispatch(clearServerError());
      this.navigation.navigate('Tabs');
    }
  }

  handleChange(key, val) {
    const { dispatch } = this.props;
    dispatch(clearServerError());
    this.setState({
      [key]: val
    })
  }

  async handleSignUp() {
    const {
      email,
      password,
      verifyPassword,
      name,
      TOSCheck,
      privacyPolicyCheck,
    } = this.state;
    const { dispatch } = this.props;

    if (!email || !password || !verifyPassword || !name || !TOSCheck || !privacyPolicyCheck) {
      this.setState({ errorText: 'Do not leave any fields empty.' });
    } else if (!this.isValid(email)) {
      this.setState({ errorText: 'Invalid email format.' });
    } else if (password !== verifyPassword) {
      this.setState({ errorText: 'Passwords do not match.' });
    } else {
      const { dispatch } = this.props;
      dispatch(clearServerError());
      this.setState({ errorText: '' });
      await dispatch(signup(name, email, password));
      this.navToHome()
    }
  }

  isValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  render() {
    const {
      TOSCheck,
      privacyPolicyCheck,
      name,
      email,
      password,
      verifyPassword,
      errorText,
    } = this.state;
    const { serverError } = this.props;
    let error = serverError;
    if (errorText) {
      error = errorText
    }

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <View style={styles.topSection}>
                <Image style={styles.mainLogo} source={require('../../assets/Logo-Block.png')} />
              </View>
              <KeyboardAvoidingView behavior='padding' style={styles.middleSection}>
                <Text style={styles.error}>{ error }</Text>
                <TextInput
                  placeholder='Full Name'
                  width='80%'
                  value={name}
                  onChange={this.handleChange.bind(this, 'name')}
                />
                <TextInput
                  placeholder='Email'
                  width='80%'
                  value={email}
                  onChange={this.handleChange.bind(this, 'email')}
                />
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
                <Spacer height={10} />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    containerStyle={styles.checkboxContainerStyle}
                    checked={TOSCheck}
                    onPress={() => this.setState({TOSCheck: !TOSCheck})}
                  />
                  <View style={styles.checkboxTextWrapper}>
                    <Text style={styles.checkboxTitle}>
                      I have read and agree to <Text onPress={() => this.navigation.navigate('TOS')} style={{fontWeight: '700'}}>Terms of Use Policy</Text>
                    </Text>
                    <Text style={styles.checkboxDesc}>
                      Including Section X (Binding Arbitration Clause and Class Action Waiver), which I understand impacts my rights about how to resolve any dispute with the Company.
                    </Text>
                  </View>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    containerStyle={styles.checkboxContainerStyle}
                    checked={privacyPolicyCheck}
                    onPress={() => this.setState({privacyPolicyCheck: !privacyPolicyCheck})}
                  />
                  <View style={styles.checkboxTextWrapper}>
                    <Text style={styles.checkboxTitle}>
                      I have read and agree to the <Text onPress={() => this.navigation.navigate('PrivacyPolicy')} style={{fontWeight: '700'}}>Privacy Policy</Text>
                    </Text>
                  </View>
                </View>
              </KeyboardAvoidingView>
              <View style={styles.bottomSection}>
                <Button name='CREATE ACCOUNT' style={1} onPress={this.handleSignUp} />
              </View>
              <BackButton onPress={this.navToLogin} />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user,
  serverError: state.user.serverError,
});


export default connect(mapStateToProps)(SignUp);
