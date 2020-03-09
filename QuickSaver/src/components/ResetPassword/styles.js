import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  mainLogo: {
    width: '100%',
    height: 125,
    resizeMode: 'contain'
  },
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  error: {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 5,
    fontFamily: 'Avenir',
    width: '70%',
  }
});

export default styles;
