import React from 'react';
import { TextInput as Input } from 'react-native';
import styles from './styles';

const TextInput = props => {
  const { placeholder, secure = false, width = '70%', onChange, value } = props;
  return (
    <Input
      style={[styles.textInput, { width }]}
      placeholder={placeholder}
      placeholderTextColor="#7187A1"
      autoCapitalize="none"
      secureTextEntry={secure}
      value={value}
      onChangeText={val => onChange(val)}
    />
  );
};

export default TextInput;
