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
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  top: {
    width: '100%',
    flex: 1.5,
    alignItems: 'center',
  },
  bottom: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
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
});

export default styles;
