import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import {setStateFromStorage} from '../redux/actions'
import store from '../redux/store'

class AsyncStorageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      // Getting data from storage
      const value = await AsyncStorage.getItem('MEALLIST');
      // If data exist
      if (value !== null) {
        // Replacing data in store with data from storage
        store.dispatch(setStateFromStorage(JSON.parse(value)))
      }
    } catch (error) {
      console.log('Error while retrieving the stored data');
    }
  }

  async componentWillUnmount() {
    try {
      // Setting data in st
      await AsyncStorage.setItem('MEALLIST', JSON.stringify(this.props.mealList));
    } catch (error) {
      console.log('Error while saving data');
    }
  }

  render() {
    return null;
  }
}
export default connect(state => ({
  mealList: state.mealList,
}))(AsyncStorageWrapper);
