import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import rootColor from '../constants/colors';

const Loadding = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={rootColor.primary} />
    </View>
  );
};

export default Loadding;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: rootColor.black,
    zIndex: 10000,
  },
});
