import React from 'react';
import {Alert} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

export const ReactNativeVectorIcons = () => {
  return (
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={() => Alert.alert('Press')}>
      Login with Facebook
    </Icon.Button>
  );
};
