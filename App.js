import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './base/routes/RootNavigation';
import { Provider } from 'react-redux';
import store from './base/redux/store';

import Home from './containers/Home';
import MealList from './containers/MealList';
import MealSheet from './containers/MealSheet';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <AsyncStorageWrapper/> */}
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MealList" component={MealList} />
            <Stack.Screen name="MealSheet" component={MealSheet} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
