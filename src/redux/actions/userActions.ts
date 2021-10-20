import {UserInfoType} from '../../types';
import {userTypeAction} from '../types';

const loginAction = (user: UserInfoType) => {
  return {
    type: userTypeAction.LOGIN,
    payload: user,
  };
};

const logoutAction = () => {
  return {
    type: userTypeAction.LOGOUT,
  };
};

export {loginAction, logoutAction};
