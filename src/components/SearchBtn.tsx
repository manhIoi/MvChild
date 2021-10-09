import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather} from '../constants/icon';

const SearchBtn = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SearchScreen')}>
      <Feather name="search" color="#fff" size={22} />
    </TouchableOpacity>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
