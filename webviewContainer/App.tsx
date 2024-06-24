import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from './BottomNavigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // const [injectedJS, setInjectedJS] = useState<string | null>(null);
  // useEffect(() => {
  //   const filePath = RNFS.DocumentDirectoryPath + './react-bundle.txt'; // 실제 파일 경로로 변경

  //   RNFS.readFile(filePath, 'utf8')
  //     .then(contents => {
  //       setInjectedJS(contents);
  //     })
  //     .catch(err => {
  //       console.error('Failed to load example.txt:', err.message);
  //     });
  // }, []);
  // console.log(injectedJS);

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <BottomNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
