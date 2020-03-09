import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const DealCard = props => {
  const {
    userDiscountID,
    name,
    desc,
    exp,
    onPressCard,
    like,
    unlike,
    favorite = false,
  } = props;

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.dealCard}>
      <View style={styles.dealCardTextWrapper}>
        <Text style={styles.dealCardName}>{name}</Text>
        <Text style={styles.dealCardDesc}>{desc}</Text>
        <Text style={styles.dealCardExp}>{exp}</Text>
      </View>
      <View style={styles.dealIcon}>
        <Icon name="right" size={20} color='#bdbdbd' />
      </View>
    </TouchableOpacity>
  );
};

export default DealCard;
