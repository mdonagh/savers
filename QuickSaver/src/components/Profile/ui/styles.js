import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  userImageWrapper: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginBottom: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  userImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  userIcon: {
    // height: 100,
    // width: 100,
    // resizeMode: 'cover',
  },
  card: {
    borderRadius: 3,
    backgroundColor: 'white',
    width: '90%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9e9e9e',
    marginBottom: 20,
  },
  cardTitleBasic: {
    fontSize: 19,
    fontWeight: '500',
    color: '#01A7FF',
  },
  buttonBasic: {
    backgroundColor: '#01A7FF',
    borderRadius: 3,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonTextBasic: {
    color: 'white',
    fontWeight: '500',
  },
  cardTitlePremier: {
    fontSize: 19,
    fontWeight: '500',
  },
  buttonPremier: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonTextPremier: {
    fontWeight: '500',
  },
});

export default styles;
