import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);
    
  return (
   <>
   <div>
        

   </div>
   <div className='flex '>
   <h1>{title}</h1>
  
   <div  className=' flex-wrap'>
    {
      movies.map(movie=>(
        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
      ))
    }


   </div>
   </div>
   
   </>
  )
}

export default MovieList
