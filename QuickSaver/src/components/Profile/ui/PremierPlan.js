import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const PremierPlan = props => {
  const { name, onPress, style = 1 } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitlePremier}>PREMIER PLAN</Text>
      <Text style={styles.cardSubtitle}>$9.99/month</Text>
      <TouchableOpacity onPress={onPress} style={styles.buttonPremier}>
        <Text style={styles.buttonTextPremier}>Upgrade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PremierPlan;
