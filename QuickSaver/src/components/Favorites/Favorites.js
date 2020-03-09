import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  Header,
  HeaderTitle,
  SearchBox,
  DiscountCard,
} from '../ui';
import {
 deleteSession,
 likeDiscount,
 removeDiscountLike,
} from '../../actions/User';


import styles from './styles';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.logout = this.logout.bind(this);
    this.navigation = this.props.navigation;
  }

  logout() {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
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
    const { user_discounts } = this.props;
    const filtered_user_discounts = user_discounts.filter(itm => {
      return itm.like;
    });
    return filtered_user_discounts.map(itm => {
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
    });
  }

  render() {
    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );
    const iconAnt = <IconAnt name="hearto" size={17} color="black" />;
    const title = <HeaderTitle name="My Favorites" icon={iconAnt} />;
    const discountCards = this.renderCards();

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header center={title} left={icon} />
        <View style={styles.body}>
          <SearchBox />
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}
          >
            {discountCards}
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

export default connect(mapStateToProps)(Favorites);
