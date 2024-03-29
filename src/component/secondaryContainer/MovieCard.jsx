import React from 'react'
import { Movies_Path_URL } from '../utils/constant/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img src={Movies_Path_URL +posterPath}/>
    </div>
  )
}

export default MovieCard
