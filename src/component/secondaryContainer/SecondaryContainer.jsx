import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movie);

  return movies === null ? (
    <h1>Good Loading ...</h1>
  ) : (
    <>
      {console.log('Movies data is available:', movies)}
      <MovieList title="title" movies={movies?.nowPlayingMovie} />
    </>
  );
};

export default SecondaryContainer;
