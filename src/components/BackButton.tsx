import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenStackProps} from 'react-native-screens';
import rootColor from '../constants/colors';
import {Ionicons} from '../constants/icon';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={20} color={rootColor.white} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
