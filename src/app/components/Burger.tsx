'use client'
import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
type ButtonProps = {
  handleToggle: ()=> void;
}
const Burger = ({ handleToggle }:handleToggle) => {

  return (
    <div className='bg-yellow-600 p-2 rounded' onClick={ ()=> { handleToggle() } }>
      <Bars3Icon className='text-white h-5' />
    </div>
  )
}

export default Burger;
