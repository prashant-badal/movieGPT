import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-[60%] bg-black grid grid-cols-12 '>
        <input type="text"
      placeholder="What do you watch today"
      className='text-black p-4 m-4  col-span-9'
      />
      <button className='px-4 m-4 py-3 bg-red-600  font-bold text-white col-span-3'>Search Movie</button>

      </form>
    </div>
  )
}

export default GptSearchBar
