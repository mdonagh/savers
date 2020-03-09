import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const SearchBox = props => {
  const { name, onChange} = props;
  return (
    <View style={styles.searchBoxWrapper}>
      <Icon name="search1" size={13} color="#bdbdbd" />
      <TextInput
        placeholder="Search"
        onChangeText={onChange}
        style={styles.searchBox}
      />
    </View>
  );
};

export default SearchBox;
