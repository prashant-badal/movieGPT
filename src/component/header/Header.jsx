import React from 'react'
import img from "../../asset/image/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <>
    <div  className="absolute z-77 px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={img} alt='logo'/>
    </div>
   
    
    </>
  )
}

export default Header
