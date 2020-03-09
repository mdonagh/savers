import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ExpirationCard = props => {
  const { name, onPress, backgroundColor } = props;
  return (
    <View style={styles.expirationCard}>
      <Text style={styles.expirationCardTitle}>EXPIRATION</Text>
      <Text style={styles.expirationCardText}>December 24th, 2019</Text>
    </View>
  );
};

export default ExpirationCard;
