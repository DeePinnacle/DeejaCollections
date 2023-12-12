import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import HeroImage from 'public/img-03.jpg'
const Homepage = () => {
  return (
    <div className='gen-containers'>
      <div className="heropage my-6 md:flex md:flex-row-reverse md:justify-around:px-3 md:bg-slate-50 lg:items-center">
        <div className="heroImg relative h-64 w-64 rounded-full overflow-hidden mx-auto md:h-700 md:rounded-none md:w-1/2 lg:h-750">
          <Image src={ HeroImage } alt='heroimage' fill={ true } style={{objectFit: 'cover'}}/>
        </div>
        <div className='heroText my-7 md:my-0 md:px-6 md:py-4 md:h-full p-2 md:w-1/2 lg:flex lg:flex-row lg:items-center'>
          <div className='lg:p-5 lg:py-11'>
            <h1 className="text-3xl font-bold uppercase py-4 text-center md:text-justify md:text-5xl lg:text-5xl">Hello! Welcome to,</h1>
            <h1 className='text-3xl font-poppins font-light text-center md:text-justify md:text-4xl lg:text-6xl'>Deeja <span className='text-yellow-600'>Collections</span></h1>
            <h1 className="text-xl font-bold uppercase py-4 text-center md:text-justify md:text-2xl">Discover 100% luxury and comfort shopping with us.</h1>
            <p className='py-2 font-poppins text-center md:text-justify md:text-lg lg:px-0 lg:text-2xl pt-3'>Deals in all kinds of luxury & affordable bags, perfume oils.</p>
            <p className='font-poppins text-center md:text-justify md:text-lg lg:px-0 lg:text-2xl pt-3'>...embrace the essence of oil based fragrance the right scent for every mood...</p>
            <div className='flex flex-row gap-2 w-48 p-2 my-3 mx-auto md:mx-0'>
              <SocialIcon url="https://facebook.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
              <SocialIcon network="whatsapp" fgColor='gray' bgColor='transparent' /> 
              <SocialIcon className="cursor-pointer" url="https://instagram.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
            </div>
            <Link href="tel:+234567890">
              <div className='bg-yellow-600 p-2 w-48 mx-auto md:mx-0 lg:w-72 lg:py-5 lg:rounded-full'>
                <p className="text-white text-center lg:text-2xl">Contact Us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage