import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 24,
    height: '100%',
    backgroundColor: '#344d5e',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  mealDisplay: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: 'white',
  },
  addIcon: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 50,
  },
});

export default styles;