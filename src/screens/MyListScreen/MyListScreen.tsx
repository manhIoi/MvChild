import React from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../../components/MyHeader';
import styles from './styles';

const MyListScreen = () => {
  return (
    <View style={styles.screen}>
      <MyHeader title="Danh sách của bạn" />
      <Text>this is my list</Text>
    </View>
  );
};

export default MyListScreen;
