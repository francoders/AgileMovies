import { useEffect, useState } from 'react';
import { MovieNow, Movie } from '../interfaces/movieInterce';
import movieApi from '../api/movieApi';

const useMovie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [peliculas, setPeliculas] = useState<Movie[]>([]);
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieApi.get<MovieNow>('/now_playing');
        const respPopular = await movieApi.get<MovieNow>('/popular');
        setPeliculas(resp.data.results);
        setPeliculasPopulares(respPopular.data.results)


        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return {
        peliculas,
        peliculasPopulares,
        isLoading,
    }
}

export default useMovie