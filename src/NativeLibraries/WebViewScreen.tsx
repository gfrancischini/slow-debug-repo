import React from 'react';
import Webview from 'react-native-webview';
import {ActivityIndicator} from 'react-native';
export const WebviewScreen = () => {
  return (
    <Webview
      renderLoading={() => <ActivityIndicator />}
      startInLoadingState={true}
      source={{uri: 'https://www.google.com'}}
    />
  );
};
