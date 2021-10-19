import {ActionType} from '../../types';
import {userTypeAction} from '../types';

const userReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case userTypeAction.LOGIN:
      return action.payload;
    case userTypeAction.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default userReducer;
