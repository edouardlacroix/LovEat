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
import store from '../../base/redux/store';
import { updateMeal } from '../../base/redux/actions';
import styles from './styles';
import AsyncStorageWrapper from '../../base/asyncStorage';

class MealSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    navParams = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{navParams.meal.name} </Text>
        <View style={styles.ingredientsWrapper}>
          {navParams.meal.ingredients.map(item => (
            // <Text style={styles.ingredients}>{item} </Text>
            <TextInput style={styles.ingredients} value={item} />
          ))}
        </View>
        <Button title="VALIDATE" onPress={() => console.log('VALIDATION')} />
      </View>
    );
  }
}

export default MealSheet;
