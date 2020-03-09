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
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  HeaderTitle,
  MessageCard,
} from '../ui';
import {
 deleteSession,
 likeDiscount,
 removeDiscountLike,
} from '../../actions/User';

import styles from './styles';

class MessageBoard extends Component {
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
    // dispatch(likeDiscount(id));
  }

  unlike(id) {
    const { dispatch } = this.props;
    // dispatch(removeDiscountLike(id));
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
        desc: 'Some description text some tex some text some text some text',
        like: false
      },
      {
        user_discount: {id: 1},
        name: 'Target',
        desc: 'Some description text some tex some text some text some text',
        like: false
      }
    ]
    return items.map(itm => {
      return (
        <MessageCard
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
    const iconAnt = <IconM name="comment-outline" size={17} color="black" />;
    const title = (
      <HeaderTitle name='Message Board' icon={iconAnt} />
    );

    const messageCards = this.renderCards();

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
            {messageCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MessageBoard;
