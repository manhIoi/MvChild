import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import rootColor from '../constants/colors';
import {rootFont} from '../constants/fonts';

interface PrimaryButtonPropsType {
  title: string;
  callback: () => void;
  style?: object;
}

const PrimaryButton = ({title, callback, style}: PrimaryButtonPropsType) => {
  return (
    <TouchableOpacity onPress={callback} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: rootColor.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
  title: {
    fontFamily: rootFont.medium,
    fontSize: 18,
  },
});
