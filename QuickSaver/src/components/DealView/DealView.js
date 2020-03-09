import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Animated,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import { Header, HeaderTitle, OutlineButton } from '../ui';
import  {
  Button,
  DealHeader,
  DetailsCard,
  ExpirationCard,
  MapView,
} from './ui';

import { deleteSession } from '../../actions/User';

import styles from './styles';

const windowHeight = Dimensions.get('window').height;


class DealView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      opacity: 0,
      top: windowHeight,
      redeemed: false,
    };
    this.navigation = this.props.navigation;
  }

  hideRedeem = () => {
    this.setState({
      height: 0,
      opacity: 0,
      top: windowHeight,
    });
  };

  onRedeem = () => {
    this.setState({
      height: '100%',
      opacity: 1,
      top: 0,
      redeemed: true,
    });
  };

  logout = () => {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  };

  render() {
    const { opacity, height, top, redeemed } = this.state;

    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );
    const iconAnt = <Icon name="user" size={17} color="black" />;
    const title = <HeaderTitle name='Target' />
    const editButton = <OutlineButton name="Back" onPress={() => this.navigation.pop()} />;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header left={editButton} center={title} right={icon} />
        <View style={styles.body}>
          <View style={styles.top}>
            <DealHeader name='DealHeader' />
            <ExpirationCard name='ExpirationCard' />
            <DetailsCard name='DetailsCard' />
          </View>
          <View style={styles.bottom}>
            <MapView name='MapView' />
            <Button name='CALL TARGET' backgroundColor='#FFF' textColor='#01A7FF'/>
            <Button disabled={redeemed}
              name={!redeemed ? 'REDEEM' : 'REDEEMED'}
              backgroundColor={!redeemed ? '#01A7FF' : '#01A7FF50'}
              onPress={this.onRedeem}
              textColor='#FFF'
            />
            <Button name='SHARE' backgroundColor='#E9EAF2' textColor='#8C8C91'/>
          </View>
        </View>
        <Animated.View style={[styles.modalWrapper, { height, opacity, top }]}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Redeeming!</Text>
            <Text style={styles.modalText}>
              Show this message to your clerk to redeem.
            </Text>
            <Button style={1} name='RETURN' onPress={this.hideRedeem} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default DealView;
