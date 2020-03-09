import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const UserImage = props => {
  const { source, onPress, style = 1 } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.userImageWrapper}>
      {source.uri ? (
        <Image style={styles.userImage} source={source} />
      ) : (
        <Icon style={styles.userIcon} name="user" size={50} color="#9e9e9e" />
      )}
    </TouchableOpacity>
  );
};

export default UserImage;
