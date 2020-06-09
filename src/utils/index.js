import tmdb from '../apis/tmdbApi';
import {tmdbAPI} from '../global/Constanst';

export const fetchPopularMovies = () =>
  new Promise(async (resolve, reject) => {
    const res = await tmdb.get(
      `movie/popular?api_key=${tmdbAPI}&language=en-US&page=1`,
    );
    const movies = res.data.results;
    resolve(movies);
  });
