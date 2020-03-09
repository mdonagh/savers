import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderTitle = props => {
  const { icon, name } = props;
  return (
    <View style={styles.headerTitle}>
      {icon && icon}
      <Text style={styles.headerTitleText}>{name && name}</Text>
    </View>
  );
};

export default HeaderTitle
