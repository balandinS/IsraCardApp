import {SHOW_INFO} from '../actions/types'
const initialState = {
  id: '',
  title: '',
  posterPath: '',
  popularity: '',
  overview: '',
  isFavorite: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SHOW_INFO:
      return {...state, ...payload};

    default:
      return state;
  }
};
