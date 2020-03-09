import React from 'react';
import { View } from 'react-native';

const Spacer = props => {
  const { height = 50 } = props;
  return <View style={{ height }}/>;
};

export default Spacer;
