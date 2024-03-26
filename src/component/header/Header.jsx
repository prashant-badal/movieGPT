import React, { useEffect } from 'react'
import img from "../../asset/image/Netflix_Logo_PMS.png"

import logo from '../../asset/image/signInLogo.png'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../utils/redux/appstore'
import { addUser, removeUser } from '../utils/redux/slice/userSlice'
import { LOGO_URL } from '../utils/constant/constant'


const Header = () => {
  const navigate =useNavigate()
const user= useSelector(store=>store.user)

const dispatch=useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL}=user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }));
      navigate('/browse')
    
    } else {
      dispatch(removeUser());
      navigate('/')
    }
  });
},[])


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
    <div  className="absolute z-77 px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-44" src={img} alt='logo'/>
        
      
      {user && 
      <div className='flex'><img className="w-12 h-12 " src={LOGO_URL} alt='logo'/>
        <button  onClick={handleSignOut} className=' font-bold text-white'>sign Out</button>
        
      
    </div>}
    </div>
   
   
    
    </>
  )
}

export default Header
