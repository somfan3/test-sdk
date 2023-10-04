/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View
} from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import { init, registerDevice } from "./module/MySignModule";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}>
          <Button
            title={'test'}
            onPress={async () => {
              await init("030098003311", "123456789");
              registerDevice("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2NlcnRpYSIsInN1YiI6IjAzMDA5ODAwMzMxMSIsImV4cCI6MTY5NjM2NDE0NiwiaWF0IjoxNjk2MzYwNTQ2LCJ0b2tlbl9pZCI6IjA4ZWVlYjYwLTY1NjgtNDkwOS1iMDFlLWJkMThiNWFkY2Q3NiIsInNjb3BlIjoiU0NPUEVfUkFTX01PQklMRV9BUFBfT0FVVEgiLCJkZWZhdWx0X3Byb2ZpbGUiOiJ0cnVlIiwiZGVmYXVsdF9jbGllbnQiOiJmYWxzZSIsInJhc19wcm9maWxlIjoiYWRzczpyYXM6cHJvZmlsZTowMDEiLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiY2xpZW50X2lkIjoic2FtcGxlc190ZXN0X2NsaWVudCJ9.KgNWkMBRosJsUhDE1JK2usW1q8XRiKF6iwtd4Wj4wo4");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
