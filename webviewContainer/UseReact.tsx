import React from 'react';
import {WebView} from 'react-native-webview';

export default function UseReact() {
  return <WebView source={{uri: 'http://localhost:5173'}} style={{flex: 1}} />;
}
