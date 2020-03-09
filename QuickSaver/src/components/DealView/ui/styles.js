import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  button: {
    width: '90%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 12,
  },
  dealHeader: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  dealHeaderImage: {
    width: '100%',
    height: 125,
    resizeMode: 'cover',
  },
  dealHeaderTextWrapper: {
    padding: 15,
  },
  dealHeaderTitle: {
    color: '#757575',
    fontWeight: '500',
    fontSize: 12,
    marginBottom: 5,
  },
  dealHeaderDesc: {
    fontWeight: '400',
    fontSize: 15,
  },
  expirationCard: {
    width: '90%',
    backgroundColor: '#E7E8F7',
    borderRadius: 3,
    padding: 15,
    marginBottom: 10,
  },
  expirationCardTitle: {
    color: '#8A8DC3',
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 5,
  },
  expirationCardText: {
    color: '#2E3190',
    fontWeight: '500',
    fontSize: 15,
  },
  detailsCards: {
    width: '90%',
    maxHeight: '30%',
    backgroundColor: '#FFF',
    borderRadius: 3,
    padding: 15,
  },
  detailsCardsTitle: {
    color: '#757575',
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 5,
  },
  detailsCardsText: {
    color: '#000',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 20,
  },
  mapWrapper: {
    width: '90%',
    height: 90,
    borderRadius: 3,
    marginBottom: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapMarker: {
    width: 25,
    height: 25,
  },
});

export default styles;
