import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const DetailsCard = props => {
  const { name, onPress, backgroundColor } = props;
  return (
    <View style={styles.detailsCards}>
      <Text style={styles.detailsCardsTitle}>DETAILS</Text>
      <Text style={styles.detailsCardsText}>
        Some description Some description Some description Some description Some description Some description 
      </Text>
    </View>
  );
};

export default DetailsCard;
