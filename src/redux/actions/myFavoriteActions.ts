import {AnimeType} from '../../types';
import {myFavoriteAction} from '../types';

const getMyFavorite = (movies: AnimeType[]) => {
  return {
    type: myFavoriteAction.GET_LIST,
    payload: movies,
  };
};

const addToMyFavoriteAction = (movie: AnimeType) => {
  return {
    type: myFavoriteAction.ADD_MOVIE,
    payload: movie,
  };
};

const removeToMyFavoriteAction = (movie: AnimeType) => {
  return {
    type: myFavoriteAction.ADD_MOVIE,
    payload: movie,
  };
};

export {addToMyFavoriteAction, removeToMyFavoriteAction, getMyFavorite};
