import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImage from 'public/aboutImg.jpg'
const About = () => {
  return (
    <div className="gen-container">
      <h1 className='text-5xl font-poppins font-bold my-4 text-center' id="About">About Us</h1>
      <h2 className='text-2xl font-poppins font-light mb-6 text-yellow-600 text-center'>Who we are</h2>
      <div className="about-container md:flex md:flex-row md:p-4 lg:justify-around lg:items-center lg:bg-slate-50">
        {/* about image */}
        <div className="relative overflow-hidden h-72 rounded-lg shadow-lg mx-auto mt-4 md:h-550 md:w-1/2 md:mt-0 lg:w-2/5 lg:h-96">
          <Image src={ AboutImage } alt='about image' fill={ true } style={{ objectFit: 'cover' }}  />
        </div>
        {/* about text */}
        <div className="mx-auto my-3 p-3 md:w-1/2 md:mt-0 md:my-0 lg:w-2/5">
          <p className='font-poppins md:text-lg lg:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat suscipit magnam, laudantium, dignissimos quia sunt minus iusto ex veniam ratione dolores nisi, quis perferendis ut molestias commodi labore dolorum?</p>
          <p className='font-poppins md:text-lg lg:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>          
          <p className='font-poppins md:text-lg lg:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>          
          <p className='font-poppins md:text-lg lg:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>          
          <p className='font-poppins md:text-lg lg:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>          
          <Link href="">
            <div className='bg-black p-2 my-3 w-48 mx-auto lg:mt-5 lg:w-full lg:p-4 lg:rounded-full'>
              <p className="text-white text-center">Contact Us</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About