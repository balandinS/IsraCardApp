import { combineReducers } from 'redux';
import user from './userReducer';
import movies from './moviesReducer';
import movie from './movieReducer';
import favoritesMovies from './FavoritesMoviesReducer'
export default combineReducers({
    isSingin: () => false,
    user,
    movies,
    movie,
    favoritesMovies,
})