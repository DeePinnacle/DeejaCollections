import React from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
const TopContact = () => {
  return (
    <div className='bg-zinc-800 p-3 md:flex flex-row justify-around'>
      <div className='flex flex-row gap-2'>
        <MapPinIcon className='text-yellow-600 h-5' />
        <p className='text-gray-300'>: Kubwa, phase 4, Fed Housing</p>
      </div>
      <div className='flex flex-row gap-2'>
        <EnvelopeIcon className='text-yellow-600 h-5' />
        <p className='text-gray-300'>Email: deejahsperfume@gmail.com</p>
      </div>
      <div className='flex flex-row gap-2'>
        <PhoneIcon className='text-yellow-600 h-5' />
        <p className='text-gray-300'>Phone: +234123458970</p>
      </div>
    </div>
  )
}

export default TopContact