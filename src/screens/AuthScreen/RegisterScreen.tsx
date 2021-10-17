import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import rootApi from '../../api/rootApi';
import GroupSocialButton from '../../components/GroupSocialButton';
import MyInput from '../../components/MyInput';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation<StackNavigationProp<any>>();

  const loginHandler = () => {
    navigation.navigate('LoginScreen');
  };
  const registerHandler = async () => {
    const res = await rootApi.registerUser(fullName, email, password);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Đăng kí</Text>
      <View style={styles.form}>
        <MyInput
          value={fullName}
          setValue={setFullName}
          placeholder="Họ tên"
          styleContainer={styles.input}
        />
        <MyInput
          value={email}
          setValue={setEmail}
          placeholder="Email"
          styleContainer={styles.input}
        />
        <MyInput
          value={password}
          setValue={setPassword}
          placeholder="Mật khẩu"
          styleContainer={styles.input}
        />
        <MyInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="xác nhận mật khẩu"
          styleContainer={styles.input}
        />
        <PrimaryButton
          title="Đăng kí"
          callback={registerHandler}
          style={{...styles.button, ...styles.actionBtn}}
          styleTitle={styles.titleaAtionBtn}
        />
        <PrimaryButton
          title="Đăng nhập"
          callback={loginHandler}
          style={{...styles.button, ...styles.linkBtn}}
          styleTitle={styles.titleLinkBtn}
        />
        <View style={styles.slice} />
        <GroupSocialButton
          socialButton={[
            {
              uri: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png',
              callback: () => console.log('register'),
            },
            {
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
              callback: () => console.log('register'),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
