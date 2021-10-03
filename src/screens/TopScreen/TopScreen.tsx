import React from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../../components/MyHeader';
import styles from './styles';

const TopScreen = () => {
  return (
    <View style={styles.screen}>
      <MyHeader title="Bảng xếp hạng" />
      <Text>this is top screen</Text>
    </View>
  );
};

export default TopScreen;
