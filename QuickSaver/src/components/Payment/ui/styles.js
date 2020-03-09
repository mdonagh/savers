import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  cardTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  cardBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  removeButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 0.4,
  },
  hiddenCardNum: {
    color: '#9e9e9e',
    fontSize: 21,
    marginLeft: 90,
  },
  lastFourCardNum: {
    color: '#9e9e9e',
    fontSize: 15,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#bdbdbd',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 3,
    padding: 10,
    marginBottom: 15,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardDetailInputWrapper: {
    width: '47%',
  },
  saveButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
  },
  saveButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  error: {
    color: '#f44336',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default styles;
