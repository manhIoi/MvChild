import React from 'react';
import {StyleSheet, Text, View, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/RootNavigation';

const App = () => {
  LogBox.ignoreAllLogs();
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
