import React from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';

interface MyInputPropsType {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  styleContainer?: ViewStyle;
}

const MyInput = ({
  value,
  setValue,
  placeholder,
  leftAction,
  rightAction,
  styleContainer,
}: MyInputPropsType) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {leftAction}
      <TextInput
        placeholderTextColor={rootColor.white}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
      />
      {rightAction}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    backgroundColor: rootColor.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 10,
    color: rootColor.white,
    fontFamily: rootFont.regular,
  },
});
