import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './styles';

const DealHeader = props => {
  const { name, backgroundColor } = props;
  return (
    <View style={styles.dealHeader}>
      <Image
        style={styles.dealHeaderImage}
        source={{uri: 'https://images.squarespace-cdn.com/content/v1/5b9d84e64cde7a7ce8a2dbf0/1542789154027-CXNH3343I49PYC2G902Q/ke17ZwdGBToddI8pDm48kCSrW3Pq3NGFZfLdBfFPig17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pmy3nA_zcH46jcY3zQ1h8imm0zIIa278Xs5B49qh-zy1Oz5JXXd9z2MZNblMco7Ow/01-Target-Powell-JoshPartee-3362.jpg?format=2500w'}}
      />
      <View style={styles.dealHeaderTextWrapper}>
        <Text style={styles.dealHeaderTitle}>DEAL</Text>
        <Text style={styles.dealHeaderDesc}>50% Off Everything</Text>
      </View>

    </View>
  );
};

export default DealHeader;
