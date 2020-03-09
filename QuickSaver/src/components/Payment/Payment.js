import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { Header, HeaderTitle, OutlineButton } from '../ui';
import CardInput from './ui';
import { deleteSession, addCard, editCard } from '../../actions/User';

import styles from './styles';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethods: [],
    };
    this.logout = this.logout.bind(this);
    this.navigation = this.props.navigation;
  }

  logout() {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  }

  handleAddPayment = () => {
    const { paymentMethods } = this.state;
    this.setState({
      paymentMethods: [...paymentMethods, {}]
    })
  };

  removeCard = idx => {
    const { paymentMethods } = this.state;
    const newCards = [];
    for (var i = 0; i < paymentMethods.length; i++) {
      if (idx !== i) {
        newCards.push(paymentMethods[i]);
      }
    }
    this.setState({ paymentMethods: newCards });
  };

  renderCards = () => {
    const { paymentMethods } = this.state;
    const { dispatch } = this.props;
    const cards = paymentMethods.map((itm, i) => {
      return <CardInput popCard={() => this.removeCard(i)} saveCard={params => dispatch(addCard(params))} />;
    });

    return [...cards, <CardInput popCard={() => this.removeCard(cards.length - 1)} saveCard={params => dispatch(editCard(params))} />];
  };

  render() {
    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );
    const title = <HeaderTitle name="Payment Methods" />;
    const backButton = (
      <OutlineButton name="BACK" onPress={() => this.navigation.pop()} />
    );

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header left={backButton} center={title} right={icon} />
        <View style={styles.body}>
          {this.renderCards()}
          <TouchableOpacity style={styles.saveButton} onPress={this.handleAddPayment}>
            <Text style={styles.saveButtonText}>ADD CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Payment;
