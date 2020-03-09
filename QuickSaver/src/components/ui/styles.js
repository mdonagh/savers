import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    backgroundColor: 'white',
    width: '70%',
    padding: 12,
    borderRadius: 3,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: .2,
    shadowRadius: 1,
  },
  button: {
    width: '70%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 12,
  },
  buttonOne: {
    backgroundColor: '#01A7FF',
  },
  buttonTwo: {
    backgroundColor: '#2E3190',
  },
  text: {
    fontSize: 17,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 12,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  headerSectionLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  headerSectionMiddle: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSectionRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  buttonOutline: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  outlineButtonText: {
    fontWeight: '600',
    fontSize: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 19,
    marginLeft: 5,
  },
  searchBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    margin: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    paddingLeft: 10,
  },
  searchBox: {
    flex: 1,
    height: 35,
    backgroundColor: 'white',
    padding: 10,
  },
  homeTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 0,
  },
  tabOne: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01A7FF',
    paddingTop: 10,
    paddingBottom: 10,
    width: '48%',
  },
  tabOneText: {
    fontSize: 13,
    fontWeight: '700',
    color: 'white',
  },
  tabTwo: {
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBF8FF',
    borderWidth: 0.3,
    borderColor: '#01A7FF',
    paddingTop: 10,
    paddingBottom: 10,
    width: '48%',
  },
  tabTwoText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#f44336',
    marginLeft: 3,
  },
  discountCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
  },
  discountCardTextWrapper: {
  },
  discountCardName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  discountCardDesc: {
    fontSize: 14,
    fontWeight: '400',
  },
  heart: {

  },
  catagoryCardWrapper: {
    width: '100%',
    paddingBottom: 10,
  },
  catagoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 3,
  },
  catagoryCardText: {
    flex: 1,
  },
  iconDivider: {
    height: '50%',
    width: 1,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
    marginLeft: 10,
  },
  subCatagoryCardWrapper: {
    width: '100%',
    paddingTop: 10,
  },
  subCatagoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#33B9FF',
    padding: 15,
    borderRadius: 3,
  },
  subCatagoryCardText: {
    flex: 1,
    color: 'white',
  },
  lastCatagoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#01A7FF',
    padding: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 10,
  },
  lastCatagoryCardText: {
    flex: 1,
    color: 'white',
  },
  messageCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 25,
  },
  messageCardTextWrapper: {
  },
  messageCardName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  messageCardDesc: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  messageHeart: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  dealCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
  },
  dealCardTextWrapper: {

  },
  dealCardName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  dealCardDesc: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
  },
  dealCardExp: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9e9e9e',
  },
  dealIcon: {

  },
});

export default styles;
