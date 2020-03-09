import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const OutlineButton = props => {
  const { name, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonOutline}>
      <Text style={styles.outlineButtonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
