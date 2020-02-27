import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import store from '../../base/redux/store';
import { addMeal, deleteMeal } from '../../base/redux/actions';
import styles from './styles';
import * as RootNavigation from '../../base/routes/RootNavigation';
import AsyncStorageWrapper from '../../base/asyncStorage';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: ''
    };
  }

  addMeal = () => {
    if (this.state.inputTextValue !== '') {
      const meal = {
        name: this.state.inputTextValue,
        ingredients: ['Ing 1', 'Ing 2', 'Ing 3']
      };
      store.dispatch(addMeal(meal));
      this.setState({ inputTextValue: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <AsyncStorageWrapper /> */}
        <View style={styles.topWrapper}>
          <Text style={styles.paragraph}>Enter new meal type</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ inputTextValue: text })}
            value={this.state.inputTextValue}
          />
          <Button title="ADD" onPress={() => this.addMeal()} />
        </View>
        <FlatList
          data={this.props.mealList}
          renderItem={({ item, id }) => (
            <TouchableHighlight
              onPress={() =>
                RootNavigation.navigate('MealSheet', { meal: item })
              }
              onLongPress={() =>
                Alert.alert(
                  'Delete a meal',
                  'Would you like to delete this meal : ' + item.name,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel'
                    },
                    {
                      text: 'OK',
                      onPress: () => store.dispatch(deleteMeal(item))
                    }
                  ],
                  { cancelable: true }
                )
              }
              key={id}
            >
              <View style={styles.itemWrapper}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.subItem}>
                  {'Ingredients : '}
                  {item.ingredients.map(item => {
                    return item + ', ';
                  })}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          style={styles.flatList}
        />
      </View>
    );
  }
}

export default connect(state => ({
  mealList: state.mealList
}))(MealList);
