import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const BackButton = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon name="chevron-left" size={25} />
    </TouchableOpacity>
  )
};

export default BackButton;
