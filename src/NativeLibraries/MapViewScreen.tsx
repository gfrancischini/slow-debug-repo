import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const style = StyleSheet.create({
  container: {flex: 1},
});

export const MapViewScreen = () => {
  return (
    <MapView
      style={style.container}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
