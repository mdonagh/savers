import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    padding: 10,
  },
  scroll: {

  },
  scrollContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 20,
    textAlign: 'justify',
  },
  p: {
    color: 'black',
    paddingBottom: 20,
    textAlign: 'justify',
  },
  mainLogo: {
    width: '100%',
    height: 125,
    resizeMode: 'contain',
  },
  backButtonWrapper: {
    position: 'relative',
    width: '100%',
    height: 50,
    backgroundColor: '#F5F6FF',
  },
});

export default styles;
