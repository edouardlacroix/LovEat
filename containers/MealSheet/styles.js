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
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontSize: 38,
    color: 'white',
    flex: 1
  },
  ingredientsWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    width: '100%',
    flex: 3
  },
  ingredients: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    height: 50,
    paddingLeft: 5,
    marginBottom: 20,
    backgroundColor: 'white'
  }
});

export default styles;
