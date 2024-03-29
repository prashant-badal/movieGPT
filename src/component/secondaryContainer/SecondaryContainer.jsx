import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store?.movie);
  console.log(movies)
  return (
   <>
      <MovieList title="title" movies={movies?.nowPlayingMovie}/>
   </>
  )
}

export default SecondaryContainer
