import {combineReducers} from 'redux';
import myfavoriteReducer from './myfavoriteReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  myFavorite: myfavoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
