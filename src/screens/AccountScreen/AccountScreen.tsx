import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import rootApi from '../../api/rootApi';
import {logoutAction} from '../../redux/actions/userActions';

const AccountScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await rootApi.logoutUser();
    if (res) {
      dispatch(logoutAction());
    }
  };

  return (
    <View style={styles.screen}>
      <View>
        {user ? (
          <PrimaryButton
            title="Đăng xuất"
            callback={handleLogout}
            style={styles.btnLogin}
            styleTitle={styles.titleBtnLogin}
          />
        ) : (
          <PrimaryButton
            title="Đăng nhập"
            callback={() => navigation.navigate('AuthStack')}
            style={styles.btnLogin}
            styleTitle={styles.titleBtnLogin}
          />
        )}
      </View>
    </View>
  );
};

export default AccountScreen;
