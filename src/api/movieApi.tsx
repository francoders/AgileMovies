import axios from "axios";

const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '577ea475bd2dbeae38d2c29748b03fd0',
        language: 'es-ES',
        pages: '1' //Infinite->


    }
})

export default movieApi