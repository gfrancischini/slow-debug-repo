import React from 'react';
import {MaskedViewScreen} from './MaskedViewScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeLibrariesIndexScreen} from './NativeLibrariesIndexScreen';
import {NativePicker} from './NativePicker';
import {ReactNativeVectorIcons} from './ReactNativeVectorIcons';
import {WebviewScreen} from './WebViewScreen';
import {ReactNativeSvgScreen} from './ReactNativeSvgScreen';
import {MapViewScreen} from './MapViewScreen';
import {GestureHandlerScreen} from './GestureHandlerScreen';
import {ReanimatedScreen} from './ReanimatedScreen';
import {FlashListScreen} from './FlashListScreen';
import {MMKVScreen} from './MMKVScreen';
import {RealmScreen} from './RealmScreen';
import {HermesScreen} from '../HermesScreen';

const Stack = createStackNavigator();

export const NativeLibrariesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NativeLibrariesIndexScreen"
        component={NativeLibrariesIndexScreen}
      />
      <Stack.Screen name="MaskedViewScreen" component={MaskedViewScreen} />
      <Stack.Screen name="NativePicker" component={NativePicker} />
      <Stack.Screen
        name="ReactNativeVectorIcons"
        component={ReactNativeVectorIcons}
      />
      <Stack.Screen name="WebviewScreen" component={WebviewScreen} />
      <Stack.Screen
        name="ReactNativeSvgScreen"
        component={ReactNativeSvgScreen}
      />
      <Stack.Screen name="MapViewScreen" component={MapViewScreen} />
      <Stack.Screen
        name="GestureHandlerScreen"
        component={GestureHandlerScreen}
      />
      <Stack.Screen name="ReanimatedScreen" component={ReanimatedScreen} />
      <Stack.Screen name="FlashListScreen" component={FlashListScreen} />
      <Stack.Screen name="MMKVScreen" component={MMKVScreen} />
      <Stack.Screen name="RealmScreen" component={RealmScreen} />
      <Stack.Screen name="HermesScreen" component={HermesScreen} />
    </Stack.Navigator>
  );
};
