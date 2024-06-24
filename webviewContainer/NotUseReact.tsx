import React, {useEffect, useRef, useState} from 'react';
import RNFS from 'react-native-fs';
import WebView from 'react-native-webview';

export default function NotUseReact() {
  const webViewRef = useRef<WebView>(null);
  const [reactContent, setReactContent] = useState('');
  const [reactDOMContent, setReactDOMContent] = useState('');

  useEffect(() => {
    const readFile = async () => {
      try {
        // 파일 경로 설정
        const react = RNFS.MainBundlePath + '/react-prod.js';
        const reactDOM = RNFS.MainBundlePath + '/react-dom-prod.js';

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
      // 기존 스크립트를 다시 실행
      const existingScript = document.createElement('script');
      existingScript.type = 'module';
      existingScript.crossOrigin = 'anonymous';
      existingScript.src = './assets/index-kztrNjId.js';
      document.head.appendChild(existingScript);
      
      existingScript.onload = () => {
        alert('Existing script reloaded successfully');
      };
    })();
    true;
    `;
  console.log(injectedJavaScript);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'http://127.0.0.1:5500/not-use-bundle/dist/index.html'}}
      style={{flex: 1}}
      onLoadEnd={() => {
        if (webViewRef.current) {
          webViewRef.current.injectJavaScript(
            reactContent + '\n' + reactDOMContent + '\n' + injectedJavaScript,
          );
        }
      }}
    />
  );
}
