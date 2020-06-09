import {ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE} from '../actions/types';

export default (state = [], {type, payload}) => {
  switch (type) {
    
    case ADD_FAVORITE_MOVIE:
      console.log(payload)
      return [...new Set([...state, payload])];
    case REMOVE_FAVORITE_MOVIE:
      return state.filter(movie => movie.id !== payload);// payload equal to id movie
    default:
      return state;
  }
};
