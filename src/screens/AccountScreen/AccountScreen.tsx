import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const AccountScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={styles.screen}>
      <View>
        <PrimaryButton
          title="Đăng nhập"
          callback={() => navigation.navigate('AuthStack')}
          style={styles.btnLogin}
          styleTitle={styles.titleBtnLogin}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
