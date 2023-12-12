'use client'
import React from 'react'
import Burger from './Burger'
import Navbar from './Navbar'
import { useState } from 'react'
const NavBurger = () => {
  const [ toggle, setToggle ] = useState(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className='w-full'>
      <div className="p-3 md:hidden">
        <div className='px-4 flex flex-row justify-between'>
          <div className='flex flex-row align-middle'>
            <p className="text-yellow-600 font-bold text-xl">Deejah Collection</p>
          </div>
          <div>
            <Burger handleToggle = { handleToggle } />
          </div>
        </div>
        <div className={`${ toggle ? 'block' : 'hidden' }`}>
          <Navbar />
        </div>
      </div>
      <div className='hidden md:block'>
        <Navbar />
      </div>
    </div>
  )
}

export default NavBurger