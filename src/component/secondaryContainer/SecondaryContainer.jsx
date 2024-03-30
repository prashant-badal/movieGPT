import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movie);


  return  (
    movies.nowPlayingMovie && (
    <div className='bg-black'>


    <div  className='-mt-52 pl-6 relative z-12 '>
    <MovieList title="Popular Movie" movies={movies?.popularMovie} />
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovie} />
    
      <MovieList title="Popular Movie" movies={movies?.popularMovie} />
      {/* {console.log( "mpvies" ,movies.popularMovie)} */}
      <MovieList title="title" movies={movies?.nowPlayingMovie} />
      <MovieList title="title" movies={movies?.nowPlayingMovie} />
      <MovieList title="title" movies={movies?.nowPlayingMovie} />
      <MovieList title="title" movies={movies?.nowPlayingMovie} />
      </div>
       </div>
    )
  );
};

export default SecondaryContainer;
