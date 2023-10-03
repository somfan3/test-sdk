/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';


import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {init, registerDevice} from './module/MySignModule';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title={'test'}
            onPress={async () => {
              init('CMT_036200015124', '28973457890370986');
              registerDevice(
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2NlcnRpYSIsInN1YiI6IjAzMDA5ODAwMzMxMSIsImV4cCI6MTY5NjE4OTE4OSwiaWF0IjoxNjk2MTg1NTg5LCJ0b2tlbl9pZCI6ImE1MDMwY2RlLWJlZTMtNDAyYi1iZTY2LWFlZTc2OTMwYTA5ZCIsInNjb3BlIjoiU0NPUEVfUkFTX01PQklMRV9BUFBfT0FVVEgiLCJkZWZhdWx0X3Byb2ZpbGUiOiJ0cnVlIiwiZGVmYXVsdF9jbGllbnQiOiJmYWxzZSIsInJhc19wcm9maWxlIjoiYWRzczpyYXM6cHJvZmlsZTowMDEiLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiY2xpZW50X2lkIjoic2FtcGxlc190ZXN0X2NsaWVudCJ9.OFAouKblSkWWWgw9Wzw4fsPayGFdECZxs9S_XOOjePk',
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
