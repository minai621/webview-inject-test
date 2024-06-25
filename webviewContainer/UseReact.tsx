import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function UseReact() {
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const [loadEndTime, setLoadEndTime] = useState<number>(0);
  const webViewRef = useRef<WebView>(null);

  const handleWebViewMessage = (event: any) => {
    const {data} = event.nativeEvent;
    if (data === 'LOADED') {
      const loadEnd = Date.now();
      setLoadEndTime(loadEnd);
    }
  };

  const injectedJS = `
    (function() {
      document.addEventListener('DOMContentLoaded', function() {
        window.ReactNativeWebView.postMessage('LOADED');ㅕ
      });
    })();

    true;
  `;

  const loadTime =
    loadStartTime && loadEndTime ? loadEndTime - loadStartTime : null;

  return (
    <View style={{flex: 1}}>
      <Text>
        WebView Load Time: {loadTime !== null ? `${loadTime} ms` : 'Loading...'}
      </Text>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://webview-inject-test-fsw7.vercel.app/',
          headers: {'Cache-Control': 'no-store'},
        }}
        incognito={true}
        style={{flex: 1}}
        onLoadStart={() => setLoadStartTime(Date.now())}
        onLoadEnd={() => {
          if (webViewRef.current) {
            webViewRef.current.injectJavaScript(injectedJS);
          }
        }}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
}
