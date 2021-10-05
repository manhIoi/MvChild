import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';

interface ContainerWithTitlePropsType {
  title: string;
  children?: React.ReactChild;
}

const ContainerWithTitle = ({title, children}: ContainerWithTitlePropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
};

export default ContainerWithTitle;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: rootColor.white,
    fontFamily: rootFont.bold,
    fontSize: 18,
  },
  childContainer: {
    marginVertical: 10,
  },
});
