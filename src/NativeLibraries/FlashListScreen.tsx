import React from 'react';
import {Text} from 'react-native';
import {FlashList} from '@shopify/flash-list';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];

for (let i = DATA.length; i < 1000; i++) {
  DATA.push({title: `item ${i}`});
}

export const FlashListScreen = () => {
  return (
    <FlashList
      data={DATA}
      renderItem={({item}) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
};
