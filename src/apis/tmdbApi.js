//https://api.themoviedb.org/3/movie/popular?api_key=0ba2cc6c7ef9bc33b8940a5c1ea30f51&language=en-US&page=1

import axios from 'axios';


export default axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})
