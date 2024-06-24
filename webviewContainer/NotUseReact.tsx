import React, {useEffect, useRef, useState} from 'react';
import RNFS from 'react-native-fs';
import WebView from 'react-native-webview';

export default function NotUseReact() {
  const webViewRef = useRef<WebView>(null);
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const readFile = async () => {
      try {
        // 파일 경로 설정
        const filePath = RNFS.MainBundlePath + '/react-chunk.js';

        // 파일 읽기
        const content = await RNFS.readFile(filePath, 'utf8');

        // 파일 내용 상태에 저장
        setFileContent(content);
      } catch (err) {
        console.error('Error reading file:', err);
      }
    };

    readFile();
  }, []);

  console.log(fileContent);

  const injectedJavaScript = `
    // document.addEventListener('DOMContentLoaded', function() {
    //   alert('Page has fully loaded');
    // });
    true; // Note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'http://127.0.0.1:5500/not-use-bundle/dist/index.html'}}
      style={{flex: 1}}
      onLoadEnd={() => {
        if (webViewRef.current) {
          webViewRef.current.injectJavaScript(
            fileContent + ' ' + injectedJavaScript,
          );
        }
      }}
    />
  );
}
