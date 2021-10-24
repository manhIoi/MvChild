import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import rootApi from '../../api/rootApi';
import GroupSocialButton from '../../components/GroupSocialButton';
import MyInput from '../../components/MyInput';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<any>>();

  const loginHandler = async () => {
    const res = await rootApi.loginWithEmailAndPassword(email, password);
  };
  const registerHandler = () => {
    navigation.navigate('RegisterScreen');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '723532214977-0mn5fjqgbf004520g9evhtgi3i9og278.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.form}>
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
        <PrimaryButton
          title="Đăng nhập"
          callback={loginHandler}
          style={{...styles.button, ...styles.actionBtn}}
          styleTitle={styles.titleaAtionBtn}
        />
        <PrimaryButton
          title="Đăng kí"
          callback={registerHandler}
          style={{...styles.button, ...styles.linkBtn}}
          styleTitle={styles.titleaAtionBtn}
        />
        <View style={styles.slice} />
        <GroupSocialButton
          socialButton={[
            {
              uri: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png',
              callback: rootApi.loginWithFacebook,
            },
            {
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
              callback: rootApi.loginWithGoogle,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
