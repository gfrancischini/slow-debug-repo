/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {MenuNavigator} from './src/FloatingMenu/MenuNavigator';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <MenuNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
