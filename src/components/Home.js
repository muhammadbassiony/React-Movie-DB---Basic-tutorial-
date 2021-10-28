import React, { useState, useEffect } from 'react';

import API from '../API';

import { useHomeFetch } from '../hooks/useHomeFetch';

import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';


const Home = () => {
    
    const { state, loading, error } = useHomeFetch();  

    console.log(state);

    return <div>Home Page</div>
};

export default Home;