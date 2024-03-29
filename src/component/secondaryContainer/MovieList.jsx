import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies)
  return (
   <>
   <div>
        <h1>{title}</h1>

   </div>
   {/* <div>
   <MovieCard posterPath={movies[0]?.posterPath}/>
   </div>
    <MovieCard/> */}
   
   </>
  )
}

export default MovieList
