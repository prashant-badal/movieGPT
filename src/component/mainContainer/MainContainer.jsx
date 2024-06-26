import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=>store?.movie?.nowPlayingMovie)

    if(!movies)return;
    // console.log(movies)
    const mainMovie=movies[0];
   
    const {original_title,overview,id}=mainMovie;
 
  return (
  <>
    <VideoTitle  title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
  </>
  )
}

export default MainContainer
