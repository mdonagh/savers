import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const MessageCard = props => {
  const {
    userDiscountID,
    name,
    desc,
    onPressCard,
    like,
    unlike,
    favorite = false,
  } = props;

  return (
    <TouchableOpacity onPress={onPressCard} style={styles.messageCard}>
      <View style={styles.messageCardTextWrapper}>
        <Text style={styles.messageCardName}>{name}</Text>
        <Text style={styles.messageCardDesc}>{desc}</Text>
      </View>
      <TouchableOpacity
        style={styles.messageHeart}
        onPress={
          favorite ? () => unlike(favorite.id) : () => like(userDiscountID)
        }
      >
        <Icon name="heart" size={20} color={favorite ? '#FF3683' : '#e0e0e0'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MessageCard;
