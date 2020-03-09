import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { Header, HeaderTitle, DealCard } from '../ui';
import { deleteSession } from '../../actions/User';

import styles from './styles';

class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.logout = this.logout.bind(this);
    this.navigation = this.props.navigation;
  }

  logout() {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  }

  renderCards() {
    // const { user_discounts } = this.props;
    // const filtered_user_discounts = user_discounts.filter(itm => {
    //   return itm.like;
    // });
    // return filtered_user_discounts
    const items = [
      {
        user_discount: {id: 1},
        name: 'Target',
        desc: '50% Off Everything',
        exp: 'December 24th, 2020'
      },
      {
        user_discount: {id: 1},
        name: 'Target',
        desc: '50% Off Everything',
        exp: 'December 24th, 2020'
      }
    ]
    return items.map(itm => {
      return (
        <DealCard
          userDiscountID={itm.user_discount.id}
          name={itm.name}
          desc={itm.desc}
          exp={itm.exp}
          favorite={itm.like}
          onPressCard={() => this.navigation.navigate('DealView')}
        />
      );
    });
  }

  render() {
    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );
    const iconAnt = <Icon name="shopping-cart" size={17} color="black" />;
    const title = <HeaderTitle name='My Deals' icon={iconAnt} />;

    const dealCards = this.renderCards();

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header center={title} left={icon} />
        <View style={styles.body}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}
          >
            {dealCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Deals;
