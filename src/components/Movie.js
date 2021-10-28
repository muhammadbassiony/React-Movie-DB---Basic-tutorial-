import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
// import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
// import MovieInfo from './MovieInfo';
// import MovieInfoBar from './MovieInfoBar';
// import Actor from './Actor';


import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log('MMOVIE :: ', movie);
    
    return  (
        <>
            <div>Movie Here</div>
        </>
    );
};

export default Movie;