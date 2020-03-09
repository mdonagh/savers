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
    paddingTop: 20,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
  },
  saveButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
