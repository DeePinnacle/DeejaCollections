import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='bg-slate-100 my-5 p-3 md:bg-white'> 
    <div className='md:flex flex-row justify-around align-middle'>
        <div className='bg-yellow-600 p-3 w-24'>
          <h1 className='text-white font-bold'>Deejah Collection</h1>
        </div>
        <ul className="Navbar-list md:inline-flex">
            <li className="list">
                <Link href="/#Home" className='anchor'>Home</Link>
            </li>
              <Link href="/About" className='anchor'>
                <li className='list'>About us</li>
              </Link>
            <li className="list">                
              <Link href="/#Services" className='anchor'>Services</Link>
            </li>
            <li className="list">                
              <Link href="/#Why" className='anchor'>Why Choose Us</Link>
            </li>
            <li className="list">
              <Link href="/#Products" className='anchor'>Products</Link>
            </li>
            <li className="list">
              <Link href="/#Contact" className='anchor'>Contact</Link>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
