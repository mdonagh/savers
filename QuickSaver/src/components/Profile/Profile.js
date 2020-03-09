import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import { Header, HeaderTitle, OutlineButton } from '../ui';
import {
  UserImage,
  BasicPlan,
  PremierPlan,
} from './ui';
import { updateUser } from '../../actions/User';
import { deleteSession } from '../../actions/Session';
import { uploadFile } from '../../actions/utils/ImageAWS.js';

import styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: {},
      imgURL: '',
      loading: false,
    };
    this.navigation = this.props.navigation;
  }

  componentDidMount() {
    const { user } = this.props;
    if (user.imgURL) {
      this.setState({
        img: { uri: user.imgURL },
      });
    }
  }

  logout = () => {
    deleteSession().then(() => {
      this.navigation.navigate('Login');
    });
  }

  memberSinceDate = () => {
    const { created_at } = this.props.user;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const m = new Date(created_at);
    return months[m.getMonth()];
  };

  selectImage = () => {
    const { dispatch } = this.props;
    const options = {
      title: 'Select Cover',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    this.setState({ loading: true });
    ImagePicker.showImagePicker(options, async response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        this.setState({ loading: false });
        console.log('User cancelled image picker');
      } else if (response.error) {
        this.setState({ loading: false });
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('response select image', response);
        const source = { uri: response.uri };
        await uploadFile(response).then(resp => {
          dispatch(updateUser({ img_url: resp }));
          // addImage(resp);
          this.setState({
            img: source,
            loading: false,
          });
        });
      }
    });
  };

  render() {
    const { img } = this.state;
    const icon = (
      <Image
        style={styles.smallLogo}
        source={require('../../assets/Icon-Header.png')}
      />
    );
    const iconAnt = <Icon name="user" size={17} color="black" />;
    const title = <HeaderTitle name='Profile' icon={iconAnt} />
    console.log('profile', this.props.user)
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: '100%', height: 30, backgroundColor: 'white' }} />
        <Header center={title} left={icon} />
        <View style={styles.body}>
          <View style={styles.top}>
            <UserImage source={img} onPress={this.selectImage} />
            <Text style={styles.userName}>{this.props.user.fullName}</Text>
            <Text style={styles.memberText}>Member since {this.memberSinceDate()}</Text>
          </View>
          <View style={styles.mid}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 1, y: 0}}
              colors={['#F5F6FF', '#EDEEFD', '#F5F6FF']}
              style={styles.savedPayments}
            >
              <TouchableOpacity onPress={() => this.navigation.navigate('Payment')}>
                <Text style={styles.savedPaymentsText}>Saved Payment Methods</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.bottom}>
            <BasicPlan />
            <PremierPlan />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  serverError: state.user.serverError,
  resetPassword: state.user.resetPassword,
});

export default connect(mapStateToProps)(Profile);
