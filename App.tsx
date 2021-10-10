import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/RootNavigation';
import 'react-native-gesture-handler';
import Orientation from 'react-native-orientation';

const App = () => {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <View style={styles.app}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
