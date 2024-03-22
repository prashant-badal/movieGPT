import React, { useEffect, useState } from 'react'
import Header from '../header/Header'

const Login = () => {
    const [isSignIn ,setIsSignIn]=useState(true);
    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn)
    }
  return (
   <>
   <div>

    <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backgroundImg'/>
    </div>
    <form className='absolute w-3/12  p-12 my-36 mx-auto right-0 left-0    bg-black bg-opacity-80'>
        <div className=' text-white text-3xl font-bold '>{isSignIn ?"Sign In":"Sign Up "}</div>
        <input className="p-4 my-4 w-full font-bold bg-yellow-50" type='text' placeholder='email/phone'/>
        <input className="p-4 my-4 w-full font-bold bg-yellow-50" type='password' placeholder='PaasWord'/>
   
         <button className='p-4 my-4 w-full bg-red-700'>{isSignIn ?"Sign In":"Sign Up "}</button>
       
                 <p className='py-4  text-white cursor-pointer' onClick={toggleSignIn}>{isSignIn? "already Sign ! Explore more Netflix":" New to Netflix ? Sign Up Now"}</p>
     
        
    </form>
    
   </div>
   
   </>
  )
}

export default Login
