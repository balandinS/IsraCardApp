import {fetchPopularMovies as getPopular} from '../../utils';
import * as TYPE from './types';
export const fetchPapularMovies = () => async dispatch => {
  const movies = await getPopular();
  dispatch({
    type: TYPE.FETCH_MOVEIS,
    payload: [...movies],
  });
};

export const showIno = movie => {
    return {
        type: TYPE.SHOW_INFO,
        payload: movie
    }
};

export const userSignined = user =>  {
   return {
     type :TYPE.USER_SIGNINED,
     payload: user
   }
}

export const userSignouted = () => {
   return {
      type: TYPE.USER_SIGNINOUTED
   }
}

export const addFavoriteMovie = movie => {
   return {
     type: TYPE.ADD_FAVORITE_MOVIE,
     payload: movie
   }
}

export const removeFavoriteMovie = id => {
  return {
    type: TYPE.REMOVE_FAVORITE_MOVIE,
    payload: id
  }
}