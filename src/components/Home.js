import React, { useState, useEffect } from 'react';

import API from '../API';

import  HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

import { useHomeFetch } from '../hooks/useHomeFetch';

import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';


const Home = () => {
    
    const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();  

    console.log(state);

    return(
        <>
            {   !searchTerm &&
                state.results[0] ? 
                <HeroImage  
                    image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title = {state.results[0].original_title}
                    text = {state.results[0].overview}
                /> : null
            }

            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (
                    // <div key={movie.id}>{movie.title}</div>
                    <Thumb
                        key={movie.id}
                        clickable
                        image={movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path : NoImage}
                        title={movie.title}
                        movieId={movie.id}
                    ></Thumb>
                ))}
            </Grid>
            <Spinner></Spinner>
        </>
    )
};

export default Home;