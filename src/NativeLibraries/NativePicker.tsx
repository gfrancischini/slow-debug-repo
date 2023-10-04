import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';

export const NativePicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Text>{selectedLanguage}</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
