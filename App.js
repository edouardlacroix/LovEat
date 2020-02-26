import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './base/routes/RootNavigation';
import { Provider } from 'react-redux';
import store from './base/redux/store';
import AsyncStorageWrapper from './base/asyncStorage'

import Home from './containers/Home';
import MealList from './containers/MealList';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AsyncStorageWrapper/>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MealList" component={MealList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
