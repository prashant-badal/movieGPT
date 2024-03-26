import React, { useEffect, useRef, useState } from 'react'
import Header from '../header/Header'
import { checkValidate } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/redux/slice/userSlice';
import { LOGO_URL, SignLOGO_URL } from '../utils/constant/constant';

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const [errMes,setErrMsg]=useState(null)

  const email=useRef(null);
  const password=useRef(null);




  const name=useRef(null)
    const [isSignIn ,setIsSignIn]=useState(true);

    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn);
   
      
        
    }

    const handdleClickButton=()=>{
      const message =checkValidate(email.current.value,password.current.value);
      console.log(message)
      setErrMsg(message )
      // console.log(password.current.value)
      if(message) return ;
      
      
      
      if(!isSignIn){
     
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: SignLOGO_URL
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));

      // navigate('/')
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrMsg(errorMessage + errorCode)
  });
  
  
    
}
else{
  // sign in

  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  console.log(user)

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrMsg(errorMessage + errorCode)
});
}

    }
  return (
   <>
   <div>

    <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backgroundImg'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12  p-12 my-36 mx-auto right-0 left-0    bg-black bg-opacity-80'>
        <div className=' text-white text-3xl font-bold '>{isSignIn ?"Sign In":"Sign Up "}</div>

        {!isSignIn &&  <input ref={name}  className="p-4 my-4 w-full font-bold bg-yellow-50" type='text' placeholder='Name'/> }
       
        <input  ref={email} className="p-4 my-4 w-full font-bold bg-yellow-50" type='text' placeholder='email/phone'/>
        <input ref={password} className="p-2 w-full font-bold bg-yellow-50" type='password' placeholder='PaasWord'/>

        <p className='text-red-700 p-2 '>{errMes}</p>
         <button className='p-4 my-4 w-full bg-red-700' onClick={handdleClickButton}>{isSignIn ?"Sign In":"Sign Up "}</button>
       
                 <p className='py-4  text-white cursor-pointer' onClick={toggleSignIn}>{isSignIn? "already Sign ! Explore more Netflix":" New to Netflix ? Sign Up Now"}</p>
     
        
    </form>
    
   </div>
   
   </>
  )
}

export default Login
