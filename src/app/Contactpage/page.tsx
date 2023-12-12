import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
const contactpage = () => {
  return (
    <div className='bg-black p-2 md:grid md:grid-flow-col md:justify-around md:gap-5' id="Contact">
        <div className='p-2 mb-3'>
            <h2 className='text-yellow-600 font-bold text-lg mb-3'>Deeja Collections</h2>
            <p className='text-white p-2'>Deeja Collections is a home of highly quality, luxurious and affordable dealer of all kinds of ladies hand bags and perfume oil. Make us your dealer and enjoy our maximum services and benefits.</p>
            <div className='p-2'>
              <SocialIcon url="https://facebook.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
              <SocialIcon network="whatsapp" fgColor='gray' bgColor='transparent' /> 
              <SocialIcon className="cursor-pointer" url="https://instagram.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
            </div>
        </div>
        <div className='p-2 mb-3'>
            <h2 className='text-yellow-600 text-xl font-extralight mb-4'>Services Link</h2>
            <div className='flex flex-row gap-2 align-middle my-2'>
              <span><ArrowRightCircleIcon className='h-9 w-9 text-white' /></span>
              <Link href='#Home' className='text-white'>Home</Link>
            </div>
            <div className='flex flex-row gap-2 align-middle my-2'>
              <span><ArrowRightCircleIcon className='h-9 w-9 text-white' /></span>
              <Link href='#Home' className='text-white'>About</Link>
            </div>
            <div className='flex flex-row gap-2 align-middle my-2'>
              <span><ArrowRightCircleIcon className='h-9 w-9 text-white' /></span>
              <Link href='#Home' className='text-white'>Services</Link>
            </div>
            <div className='flex flex-row gap-2 align-middle my-2'>
              <span><ArrowRightCircleIcon className='h-9 w-9 text-white' /></span>
              <Link href='#Home' className='text-white'>Benefits</Link>
            </div>
            <div className='flex flex-row gap-2 align-middle my-2'>
              <span><ArrowRightCircleIcon className='h-9 w-9 text-white' /></span>
              <Link href='#Home' className='text-white'>Products</Link>
            </div>
        </div>
        <div className='p-2'>
          <h2 className='text-yellow-600 font-extralight text-xl mb-4'>Contact Us</h2>
          <p className='text-white mb-3'>We are active 24/7, take out time to contact us. We're readily available and open for business.</p>
          <div className='p-2 flex flex-row align-middle gap-3'>
            <MapPinIcon className='h-5 w-5 text-white' />
            <p className='text-white'>Kubwa Phase 4, federal housing kubwa Abuja.</p>
          </div>
          <div className='p-2 flex flex-row align-middle gap-3'>
            <PhoneIcon className='h-5 w-5 text-white' />
            <p className='text-white'>+234 80-123-4567</p>
          </div>
          <div className='p-2 flex flex-row align-middle gap-3'>
            <EnvelopeIcon className='h-5 w-5 text-white' />
            <p className='text-white'>Deejacollections@gmail.com</p>
          </div>
        </div>
    </div>
  )
}

export default contactpage;