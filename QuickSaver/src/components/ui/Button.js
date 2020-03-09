import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = props => {
  const { name, onPress, style = 1, disabled } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style === 1 ? styles.buttonOne : styles.buttonTwo]}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
