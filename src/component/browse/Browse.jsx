import React, { useEffect } from 'react'
import Header from '../header/Header'
import useNowPlayingMovie from '../../hooks/useNowPlayingMovie'


const Browse = () => {
useNowPlayingMovie();
  return (
    <div >
      <div  className='m-10' >
    
      
    <h1 className='text-red-700 font-bold   text-5xl '>Welcome to Netflix </h1>
    <h1 className='text-black font-bold text-4xl '>Work is in progress ..... </h1>
    </div>
     <Header/> 
     
   
    
    </div>
  )
}

export default Browse
