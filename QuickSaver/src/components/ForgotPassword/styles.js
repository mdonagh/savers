import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  mainText: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Avenir',
    color: '#516A8C',
    marginBottom: 10,
    width: '70%'
  },
  mainLogo: {
    width: '100%',
    height: 125,
    resizeMode: 'contain'
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  middleSection: {
    flex: 1,
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
  modalWrapper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: .2,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  modalTitle: {
    fontSize: 15,
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontWeight: '900',
    color: '#516A8C',
    marginBottom: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 15,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#516A8C',
    marginBottom: 20,
    width: '80%',
  },
  error: {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 13,
    padding: 5,
    fontFamily: 'Avenir',
    width: '70%',
  },
});

export default styles;
