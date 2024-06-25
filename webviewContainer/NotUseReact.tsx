import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import RNFS from 'react-native-fs';
import WebView from 'react-native-webview';

export default function NotUseReact() {
  const webViewRef = useRef<WebView>(null);
  const [reactContent, setReactContent] = useState('');
  const [reactDOMContent, setReactDOMContent] = useState('');
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);
  const [loadEndTime, setLoadEndTime] = useState<number | null>(null);

  useEffect(() => {
    const readFile = async () => {
      try {
        // 파일 경로 설정
        // const react = RNFS.MainBundlePath + '/react-prod.js';
        // const reactDOM = RNFS.MainBundlePath + '/react-dom-prod.js';
        const react = RNFS.MainBundlePath + '/react.prod.min.js';
        const reactDOM = RNFS.MainBundlePath + '/react-dom.prod.min.js';

        // 파일 읽기
        const react_content = await RNFS.readFile(react, 'utf8');
        const reactDOM_content = await RNFS.readFile(reactDOM, 'utf8');

        // 파일 내용 상태에 저장
        setReactContent(react_content);
        setReactDOMContent(reactDOM_content);
      } catch (err) {
        console.error('Error reading file:', err);
      }
    };

    readFile();
  }, []);

  const injectedJavaScript = `
    (function() {
      
      const existingScript = document.createElement('script');
      existingScript.type = 'module';
      existingScript.crossOrigin = 'anonymous';
      existingScript.src = "./my-app.cjs.js";
      
      document.head.appendChild(existingScript);
      
      // document.addEventListener('DOMContentLoaded', function() {
      //   window.ReactNativeWebView.postMessage('LOADED');
      // });
    })();
    true;
  `;

  const handleWebViewMessage = (event: any) => {
    const {data} = event.nativeEvent;
    if (data === 'LOADED') {
      const loadEnd = Date.now();
      setLoadEndTime(loadEnd);
    }
  };

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
          uri: 'https://webview-inject-test.vercel.app',
          headers: {'Cache-Control': 'no-store'},
        }}
        style={{flex: 1}}
        incognito={true}
        onLoadStart={() => {
          setLoadStartTime(Date.now());
        }}
        onLoadEnd={() => {
          if (webViewRef.current) {
            webViewRef.current.injectJavaScript(
              reactContent + '\n' + reactDOMContent + '\n' + injectedJavaScript,
            );
          }
        }}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
}
