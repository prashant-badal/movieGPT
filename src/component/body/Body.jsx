import React, { useEffect } from 'react'


import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Browse from '../browse/Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/redux/slice/userSlice'


const route =createBrowserRouter(
    [
        {
  path:"/",
  element:<Login/>
},
{
    path:"/browser",
    element:<Browse/>
  },
])
const Body = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,displayName}=user;
            dispatch(addUser({email:email,displayName:displayName}));
        // ...
      } else {
        dispatch(removeUser)
      }
    });
  })
  // useEffect(()=> {
  //   onAuthStateChanged(auth,(user)=>{
  //     const {email,displayName}=user;
  //     dispatch(addUser({email:email,displayName:displayName}))
  //   })
  // },[])
    
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default Body
