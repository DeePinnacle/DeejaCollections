import React from 'react'
import Image from 'next/image'
import Bag from 'public/bag-2.png'
import OilPerfume from 'public/oil-1.jpg'
import Link from 'next/link'
const page = () => {
  return (
    <div className='bg-white p-2'>
        <h1 className='text-5xl font-poppins font-bold my-4 text-center' id="Services">Our Services</h1>
        <h2 className='text-2xl font-poppins font-light mb-6 text-yellow-600 text-center'>What we offer</h2>
        <p className='text-center font-poppins'>At the Deeja Collection, our services are top notch and one of a kind.</p>
        <p className='text-center font-poppins'>Always at your beck and call...</p>
        <div className='bg-slate-50 p-3 my-5 md:flex md:flex-row md:gap-3 lg:gap-0'>
            {/* bag services */}
            <div className='bg-white mb-4 lg:w-2/5 lg:mx-auto'>
                {/* image container */}
                <div className='relative h-52 w-full rounded-t-2xl overflow-hidden mb-5 md:h-72'>
                    <Image src={ Bag } alt='bag-image' fill={ true } style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div className='p-2'>
                  <h1 className='text-xl font-bold'>Luxury & Affordable bags</h1>
                  <p className='my-2 text-justify'>At Deeja Collections our service includes providing you with quality, durable and highly affordable bags to help complete your fashion sense.</p>
                  <h2 className='text-sm font-bold font-poppins'>Key Focus:</h2>
                  <p className='text-gray-500'><span className='font-bold'>o</span> Quality</p>
                  <p className='text-gray-500'><span className='font-bold'>o</span> Affordable</p>
                  <p className='text-gray-500'><span className='font-bold'>o</span> Luxurious</p>
                  <Link href="">
                    <div className='bg-black p-2 my-3 mx-auto rounded-full '>
                      <p className="text-white text-center">Shop Now</p>
                    </div>
                  </Link>
                </div>
            </div>
            {/* oil perfume services */}
            <div className='bg-white lg:w-2/5 lg:mx-auto'>
              <div className='p-2'>
                <h1 className='text-xl font-bold'>Perfume Oils</h1>
                <p className='my-2 text-justify'>We provide nice smelling fregrance oil perfume, to compliment your outfit. Looking good is good business, smelling nice is our business.</p>
                <h2 className='text-sm font-bold font-poppins'>Key Focus:</h2>
                <p className='text-gray-500'><span className='font-bold'>o</span> Top Notch scent</p>
                <p className='text-gray-500'><span className='font-bold'>o</span> Affordable</p>
                <p className='text-gray-500'><span className='font-bold'>o</span> Long lasting</p>
                <Link href="">
                  <div className='bg-black p-2 my-3 mx-auto rounded-full '>
                    <p className="text-white text-center">Shop Now</p>
                  </div>
                </Link>
                <div className='relative h-52 w-full rounded-b-2xl overflow-hidden mb-5 md:h-72'>
                  <Image src={ OilPerfume } alt='bag-image' fill={ true } style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page