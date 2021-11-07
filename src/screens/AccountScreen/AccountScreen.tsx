import React, {useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import rootApi from '../../api/rootApi';
import {logoutAction} from '../../redux/actions/userActions';
import LoginBtn from '../../components/LoginBtn';
import Avatar from '../../components/Avatar';
import {Feather} from '../../constants/icon';

const AccountScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    const res = await rootApi.logoutUser();
    if (res) {
      dispatch(logoutAction());
    }
  }, []);
  const actions = useMemo(() => {
    return [
      {
        label: 'SĐT',
        value: user?.phoneNumber,
        callback: () => console.log('change phone number'),
        icon: <Feather name="phone" color="gray" size={16} />,
      },
      {
        label: 'Đổi mật khẩu',
        value: '*********',
        callback: () => console.log('change password'),
        icon: <Feather name="lock" color="gray" size={16} />,
      },
      {
        label: 'Đăng xuất',
        callback: handleLogout,
        icon: <Feather name="log-out" color="gray" size={16} />,
      },
    ];
  }, []);

  return (
    <View style={styles.screen}>
      {user ? (
        <View>
          <View style={styles.infoContainer}>
            <Avatar
              name={user.displayName}
              image={user.photoURL}
              size={80}
              rounded
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.displaynameText}>Pham manh loi</Text>
              <Text style={styles.emailText}>manhloi0505@gmail.com</Text>
            </View>
          </View>
          <View>
            {actions.map(action => (
              <TouchableOpacity
                key={`action-${action.label}`}
                activeOpacity={0.9}
                onPress={action.callback}
                style={styles.itemAction}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {action.icon}
                  <Text style={styles.itemActionText}>{action.label}</Text>
                </View>
                <Text style={styles.itemActionText}>{action.value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.screenCenter}>
          <View>
            <LoginBtn />
          </View>
        </View>
      )}
    </View>
  );
};

export default AccountScreen;
