import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import {statusBarHeight} from '../constants/dimensions';
import rootFont from '../constants/fonts';

interface ToolBarPropsType {
  title?: string;
  subTitle?: string;
}

const ToolBar = ({title, subTitle}: ToolBarPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>{title}</Text>
      <Text style={[styles.subtitle, styles.text]}>{subTitle}</Text>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
  },
  title: {
    fontFamily: rootFont.extraBold,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: rootFont.semiBold,
    fontSize: 16,
  },
  text: {
    color: rootColor.white,
  },
});
