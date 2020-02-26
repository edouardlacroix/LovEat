import * as React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import store from '../../base/redux/store';
import { addMeal, deleteMeal } from '../../base/redux/actions';
import styles from './styles';

class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: '',
    };
  }

  addMeal = meal => {
    if (this.state.inputTextValue !== '') {
      store.dispatch(addMeal(this.state.inputTextValue));
      this.setState({ inputTextValue: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
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
          renderItem={({ item }) => (
            <TouchableHighlight
              onLongPress={() =>
                Alert.alert(
                  'Delete a meal',
                  'Would you like to delete this meal : ' + item,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => store.dispatch(deleteMeal(item)),
                    },
                  ],
                  { cancelable: true }
                )
              }>
              <View style={styles.itemWrapper}>
                <Text style={styles.item}>{item}</Text>
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
  mealList: state.mealList,
}))(MealList);
