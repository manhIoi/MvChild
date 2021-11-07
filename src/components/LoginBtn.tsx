import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import rootColor from '../constants/colors';
import PrimaryButton from './PrimaryButton';

const LoginBtn = () => {
  const navigation = useNavigation<any>();
  return (
    <PrimaryButton
      title="Đăng nhập"
      callback={() => navigation.navigate('AuthStack')}
      style={styles.btnLogin}
      styleTitle={styles.titleBtnLogin}
    />
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: rootColor.primary,
  },
  titleBtnLogin: {
    color: rootColor.white,
    fontSize: 16,
  },
});
