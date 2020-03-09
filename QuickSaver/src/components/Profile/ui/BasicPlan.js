import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const BasicPlan = props => {
  const { name, onPress, style = 1 } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitleBasic}>BASIC PLAN</Text>
      <Text style={styles.cardSubtitle}>FREE</Text>
      <TouchableOpacity onPress={onPress} style={styles.buttonBasic}>
        <Text style={styles.buttonTextBasic}>Selected</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicPlan;
