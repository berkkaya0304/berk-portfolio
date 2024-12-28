"use client";

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ActivityList from '@/components/social/ActivityList';
import { movieData, movieColumns } from '@/data/social';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Papa.parse(movieData, {
      header: true,
      complete: (results) => {
        setMovies(results.data);
      },
    });
  }, []);

  return (
    <ActivityList 
      title="Movie List" 
      data={movies} 
      columns={movieColumns}
    />
  );
};

export default MovieList;