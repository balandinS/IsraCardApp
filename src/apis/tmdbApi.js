//https://api.themoviedb.org/3

import axios from 'axios';


export default axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})
