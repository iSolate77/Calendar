import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className='bg-green-700 w-screen p-5 text-white flex justify-between mb-3'>
        <div className='font-extrabold text-2xl'><a href='/'>Foundation Year Calendar</a></div>
        <div><a href='/login'>Login</a></div>
      </div>
    </>
  )
}
