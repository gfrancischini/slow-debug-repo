import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NativeLibrariesNavigator} from '../NativeLibraries/NativeLibrariesNavigator';

const Drawer = createDrawerNavigator();

export const MenuNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="NativeLibraries"
        component={NativeLibrariesNavigator}
      />
    </Drawer.Navigator>
  );
};
