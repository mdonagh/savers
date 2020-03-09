import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const HomeTabs = props => {
  const { onLeftPress, onRightPress } = props;
  return (
    <View style={styles.homeTabs}>
      <TouchableOpacity
        onPress={onLeftPress}
        style={styles.tabOne}
      >
        <Text style={styles.tabOneText}>Quik$avings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onRightPress}
        style={styles.tabTwo}
      >
        <Icon name="fire" size={13} color="#f44336" />
        <Text style={styles.tabTwoText}>Hot Deals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeTabs;
