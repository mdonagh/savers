import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  haveAnAccount: {
    textAlign: 'center',
    fontSize: 12,
    color: '#01A7FF',
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
  checkboxContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 10,
  },
  checkboxTextWrapper: {
    flex: 1,
  },
  checkboxTitle: {
    fontSize: 13,
    lineHeight: 17.5,
    fontWeight: '400',
    fontFamily: 'Avenir',
    color: '#516A8C',
    marginTop: 2.5,
    marginBottom: 5,
  },
  checkboxDesc: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Avenir',
    color: '#7086A2',
    lineHeight: 14
  },
  checkboxContainerStyle: {
    marginLeft: 0,
    marginRight: 5,
    paddingRight: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingLeft: 0,
  },
  error: {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 5,
    fontFamily: 'Avenir',
    width: '80%'
  }
});

export default styles;
