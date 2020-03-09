import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Header = props => {
  const { left, center, right } = props;
  return (
    <View style={styles.header}>
      <View style={styles.headerSectionLeft}>{left && left}</View>
      <View style={styles.headerSectionMiddle}>{center && center}</View>
      <View style={styles.headerSectionRight}>{right && right}</View>
    </View>
  );
};

export default Header
