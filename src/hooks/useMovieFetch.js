import { useState, useEffect } from "react";

import API from '../API';


export const useMovieFetch = (movieId) => {
 
    // const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // const [isLoadingMore, setIsLoadingMore] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            try{
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        fetchData();

    }, [movieId]);

    return { state, loading, error };
};