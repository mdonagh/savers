import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  smallLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  top: {
    flex: 1,
    alignItems: 'center',
  },
  mid: {
    flex: 0.37,
    width: '100%',
    alignItems: 'center',
  },
  bottom: {
    flex: 2.2,
    alignItems: 'center',
  },
  savedPayments: {
    width: '100%',
    height: '67%',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: .25,
  },
  savedPaymentsText: {
    color: '#8F91E8',
    fontWeight: '500',
    fontSize: 14,
  },
  userName:{
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 5,
  },
  memberText:{
    fontSize: 12,
    fontWeight: '400',
    color: '#9e9e9e',
  },
});

export default styles;
