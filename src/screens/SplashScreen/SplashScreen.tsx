import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import rootColor from '../../constants/colors';
import {Auth} from '../../firebase';
import {loginAction, logoutAction} from '../../redux/actions/userActions';
import {UserInfoType} from '../../types';
import styles from './styles';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObservable = Auth.onAuthStateChanged(async user => {
      console.log('call authSateChange');
      if (!user) {
        console.log('user is null');
        return;
      }
      const userData: UserInfoType = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
      };
      dispatch(loginAction(userData));
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    });

    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 2000);

    return () => unregisterAuthObservable();
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={rootColor.primary} />
    </View>
  );
};

export default SplashScreen;
