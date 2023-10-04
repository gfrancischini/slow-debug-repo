import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screens = [
  'MaskedViewScreen',
  'NativePicker',
  'ReactNativeVectorIcons',
  'WebviewScreen',
  'ReactNativeSvgScreen',
  'MapViewScreen',
  'GestureHandlerScreen',
  'ReanimatedScreen',
  'FlashListScreen',
  'MMKVScreen',
  'RealmScreen',
  'HermesScreen',
  'ExpoModulesScreen',
].sort();

export const NativeLibrariesIndexScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <FlatList
        renderItem={info => {
          const onPress = () => {
            navigate(info.item);
          };
          return (
            <Pressable onPress={onPress}>
              <Text>{info.item}</Text>
            </Pressable>
          );
        }}
        data={screens}
      />
    </View>
  );
};
