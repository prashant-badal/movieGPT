import React, { useEffect } from 'react'
import Header from '../header/Header'
import useNowPlayingMovie from '../../hooks/useNowPlayingMovie'
import MainContainer from '../mainContainer/MainContainer';
import SecondaryContainer from '../secondaryContainer/SecondaryContainer';


const Browse = () => {
useNowPlayingMovie();
  return (
    <div >
      
     <Header/> 
     <MainContainer/>
     <SecondaryContainer/>
     
   
    
    </div>
  )
}

export default Browse
