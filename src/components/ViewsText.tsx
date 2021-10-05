import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import rootFont from '../constants/fonts';

interface ViewsTextPropsType {
  views?: number | string;
}

const ViewsText = ({views}: ViewsTextPropsType) => {
  return <Text style={styles.text}>Lượt xem: {views}</Text>;
};

export default ViewsText;

const styles = StyleSheet.create({
  text: {
    color: 'gray',
    fontFamily: rootFont.medium,
    marginBottom: 10,
  },
});
