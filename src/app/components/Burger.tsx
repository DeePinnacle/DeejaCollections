'use client'
import React from 'react'
import { MouseEvent } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
const Burger = ({ handleToggle }:React.MouseEvent<HTMLButtonElement>) => {

  return (
    <div className='bg-yellow-600 p-2 rounded' onClick={ ()=> { handleToggle() } }>
      <Bars3Icon className='text-white h-5' />
    </div>
  )
}

export default Burger;
