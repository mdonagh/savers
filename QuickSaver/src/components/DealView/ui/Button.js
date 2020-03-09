import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = props => {
  const { name, onPress, backgroundColor, textColor } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor}]}
    >
      <Text style={[styles.buttonText, {color: textColor}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
