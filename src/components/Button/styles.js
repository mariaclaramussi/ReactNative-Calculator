import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  operationButton: {
    color: '#DE383A',
    backgroundColor: '#2A2C29',
  },
  equalsOperationButton: {
    width: 60,
    height: 60,
    marginLeft: (Dimensions.get('window').width / 4 - 60) / 2,
    marginTop: (Dimensions.get('window').width / 4 - 60) / 2,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#DE383A',
    color: '#FFF',
    borderRadius: 15,
    padding: 0,
    alignItems: 'center',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default styles;
