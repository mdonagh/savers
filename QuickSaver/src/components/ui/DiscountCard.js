import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';

        <IconF name="fire" size={13} color="#f44336" />


import styles from './styles';

const DiscountCard = props => {
  const {
    userDiscountID,
    name,
    desc,
    onPressCard,
    like,
    unlike,
    favorite = false,
    hot,
  } = props;

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.discountCard}>
      <View style={styles.discountCardTextWrapper}>
        <Text style={styles.discountCardName}>{name}</Text>
        <Text style={styles.discountCardDesc}>{desc}</Text>
      </View>
      <TouchableOpacity
        style={styles.heart}
        onPress={
          favorite ? () => unlike(favorite.id) : () => like(userDiscountID)
        }
      >
      {
        hot
        ? <IconF name="fire" size={20} color={favorite ? '#f44336' : '#e0e0e0'} />
        : <Icon name="heart" size={20} color={favorite ? '#FF3683' : '#e0e0e0'} />
      }
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DiscountCard;
