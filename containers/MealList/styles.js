import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#344d5e',
    color: 'white',
    flex: 1
  },
  topWrapper: {
    width: '100%',
    marginBottom: 10
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    paddingLeft: 5,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  itemWrapper: {
    borderBottomWidth: 1,
    backgroundColor: 'grey'
  },
  item: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 10
  },
  subItem: {
    fontSize: 12,
    padding: 10,
    color: 'white'
  },
  flatList: {
    height: '80%',
    width: '100%',
    paddingBottom: 50
  }
});

export default styles;
