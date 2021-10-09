import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';

interface PrimaryButtonPropsType {
  title: string;
  callback: () => void;
  style?: ViewStyle;
  styleTitle?: TextStyle;
}

const PrimaryButton = ({
  title,
  callback,
  style,
  styleTitle,
}: PrimaryButtonPropsType) => {
  return (
    <TouchableOpacity onPress={callback} style={[styles.container, style]}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
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
