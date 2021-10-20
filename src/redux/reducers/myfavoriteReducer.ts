import {ActionType, AnimeType} from '../../types';
import {myFavoriteAction} from '../types';

const myfavoriteReducer = (state: AnimeType[] = [], action: ActionType) => {
  switch (action.type) {
    case myFavoriteAction.GET_LIST:
      return action.payload;
    case myFavoriteAction.ADD_MOVIE:
      return [...state, action.payload];
    case myFavoriteAction.REMOVE_MOVIE:
      const index = state.indexOf(action.payload);
      console.log(index);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default myfavoriteReducer;
