import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather} from '../constants/icon';

const SearchBtn = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('navigate search screen')}>
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
