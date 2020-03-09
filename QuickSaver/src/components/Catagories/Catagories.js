import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Header, OutlineButton, CatagoryCard } from '../ui';
import {
  deleteSession,
  chooseCatagory,
  removeCatagory,
} from '../../actions/User';

import styles from './styles';

class Catagories extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.logout = this.logout.bind(this);
    this.back = this.back.bind(this);
    this.navigation = this.props.navigation;
  }

  logout() {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  }

  back() {
    this.navigation.pop();
  }

  renderCatagories() {
    const { selected_catagories, all_catagories, dispatch } = this.props;
    const userCats = {};
    selected_catagories.map(itm => {
      let cat_id = itm.last_catagory.sub_catagory.catagory_id;
      if (userCats[cat_id]) {
        userCats[cat_id] = [...userCats[cat_id], itm];
      } else {
        userCats[cat_id] = [itm];
      }
    });
    return all_catagories.map(itm => {

      return <CatagoryCard
        dispatch={dispatch}
        chooseCatagory={chooseCatagory}
        removeCatagory={removeCatagory}
        data={itm}
        selectedCatagories={userCats[itm.id]}
        />;
    });
  }

  render() {
    const logo = (
      <Image
        style={styles.mainLogo}
        source={require('../../assets/Logo-Header.png')}
      />
    );

    const headerButton = <OutlineButton name="DONE" onPress={this.back} />;
    const catagoryCards = this.renderCatagories();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header center={logo} right={headerButton} />
        <View style={styles.body}>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
            {catagoryCards}
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
  serverError: state.user.serverError,
});

export default connect(mapStateToProps)(Catagories);
