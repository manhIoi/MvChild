import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import {headerDimensions, statusBarHeight} from '../constants/dimensions';
import {rootFont} from '../constants/fonts';

interface MyHeaderPropsType {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  containerColor?: any;
}

const MyHeader = ({
  title,
  leftAction,
  rightAction,
  containerColor,
}: MyHeaderPropsType) => {
  return (
    <View
      style={[
        styles.container,
        (leftAction || rightAction) && {justifyContent: 'space-between'},
        containerColor && {backgroundColor: containerColor},
      ]}>
      {leftAction}
      <Text style={styles.title}>{title}</Text>
      {rightAction}
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    height: headerDimensions.fullHeight,
    backgroundColor: rootColor.redPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  title: {
    fontFamily: rootFont.bold,
    color: rootColor.white,
    fontSize: 18,
  },
});
