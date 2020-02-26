import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as RootNavigation from '../../base/routes/RootNavigation';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from './styles'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeal: 'Random MEAL',
    };
  }

  getRandomMeal() {
    this.setState({
      currentMeal: this.props.mealList[
        Math.floor(Math.random() * this.props.mealList.length)
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>What to eat ?</Text>
        <Text style={styles.mealDisplay}>{this.state.currentMeal}</Text>

        <Icon
          name="shuffle"
          size={200}
          color={'#bf3d6a'}
          // onPress={() => Alert.alert('Random pick - TODO')}
          onPress={() => this.getRandomMeal()}
        />
        <Icon
          name="add-circle"
          onPress={() => RootNavigation.navigate('MealList')}
          size={70}
          color={'#4eaace'}
          containerStyle={styles.addIcon}
        />
      </View>
    );
  }
}
export default connect(state => ({
  mealList: state.mealList,
}))(Home);
