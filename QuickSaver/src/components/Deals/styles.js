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
  },
  scrollView: {
    backgroundColor: '#F5F6FF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
});

export default styles;
