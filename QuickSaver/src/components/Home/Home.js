import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import {
  Header,
  OutlineButton,
  SearchBox,
  HomeTabs,
  DiscountCard,
} from '../ui';
import {
  likeDiscount,
  removeDiscountLike,
} from '../../actions/User';
import { deleteSession } from '../../actions/Session';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDeals: false
    };
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.allDeals = this.allDeals.bind(this)
    this.hotDeals = this.hotDeals.bind(this)
    this.logout = this.logout.bind(this);
    this.navToCatagories = this.navToCatagories.bind(this);
    this.navigation = this.props.navigation;
  }

  logout() {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  }

  navToCatagories() {
    this.navigation.navigate('Catagories');
  }

  like(id) {
    const { dispatch } = this.props;
    dispatch(likeDiscount(id));
  }

  unlike(id) {
    const { dispatch } = this.props;
    dispatch(removeDiscountLike(id));
  }

  renderCards() {
    const { hotDeals } = this.state;
    const { user_discounts } = this.props;
    if (hotDeals) {
      return user_discounts.map(itm => {
        return (
          <DiscountCard
            userDiscountID={itm.user_discount.id}
            name={itm.name}
            desc={itm.desc}
            like={this.like}
            unlike={this.unlike}
            favorite={itm.like}
            hot
          />
        );
      });
    }

    return user_discounts.map(itm => {
      return (
        <DiscountCard
          userDiscountID={itm.user_discount.id}
          name={itm.name}
          desc={itm.desc}
          like={this.like}
          unlike={this.unlike}
          favorite={itm.like}
        />
      );
    })
  }

  allDeals() {
    this.setState({
      hotDeals: false
    })
  }

  hotDeals() {
    this.setState({
      hotDeals: true
    })
  }

  render() {
    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );

    const logo = (
      <Image
        style={styles.mainLogo}
        source={require('../../assets/Logo-Header.png')}
      />
    );

    const headerButton = <OutlineButton name="CATEGORIES" onPress={this.navToCatagories} />;
    const discountCards = this.renderCards();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header
          left={icon}
          center={logo}
          right={headerButton}
        />
        <View style={styles.body}>
          <HomeTabs onLeftPress={this.allDeals} onRightPress={this.hotDeals} />
          <SearchBox />
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
            { discountCards }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  selected_catagories: state.user.selected_catagories,
  all_catagories: state.user.all_catagories,
  user_discounts: state.user.user_discounts,
  serverError: state.user.serverError,
});

export default connect(mapStateToProps)(Home);
