import React from 'react';
import { MMKV } from 'react-native-mmkv';
import { Text } from 'react-native';

const storage = new MMKV()
storage.set('user.name', 'Gabriel Parelli')

export const MMKVScreen = () => {
  return (
    <Text>User: {storage.getString('user.name')}</Text>
  );
};