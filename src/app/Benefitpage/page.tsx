import { BanknotesIcon, HandThumbUpIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'
const Benefits = () => {
    return (
        <div className='gen-container'>
            <h1 className='text-center text-5xl font-poppins font-bold my-4' id="Why">Our Benefits</h1>
            <h2 className='text-center font-light text-2xl text-yellow-600'>Why choose us</h2>
            <div className='benefit-section lg:flex lg:flex-row'>
            {/* benefits list */}
                <div className='bg-slate-50 p-2 my-5 md:grid md:grid-cols-2 md:gap-2'>
                    <div className='bg-white p-2 my-3 shadow-sm rounded-md md:w-full md:mx-auto'>
                        <BanknotesIcon className='h-28 w-20 mx-auto' />
                        <h2 className='text-center font-bold text-lg my-3'>Highly Affordable</h2>
                        <p className='text-center'>We provide top notch and quality products at a very affordable price. Get luxurious bags and oil perfume without breaking the bank.</p>
                        <div className='bg-black p-2 rounded-full my-3'>
                            <p className='text-white text-center'>Cost sensitive</p>
                        </div>
                    </div>
                    <div className='bg-white p-2 my-3 shadow-sm rounded-md md:w-full md:mx-auto'>
                        <HandThumbUpIcon className='h-28 w-20 mx-auto' />
                        <h2 className='text-center font-bold text-lg my-3'>Tested & Trusted</h2>
                        <p className='text-center'>Our customers are our top priority, ensuring we put a smile on their faces with our products. we serve our customers with much love and respect and never disappoint, giving you what you order.</p>
                        <div className='bg-black p-2 rounded-full my-3'>
                            <p className='text-white text-center'>Highly Reliable</p>
                        </div>
                    </div>
                    <div className='bg-white p-2 my-3 shadow-sm rounded-md md:mx-auto'>
                        <ClockIcon className='h-28 w-20 mx-auto' />
                        <h2 className='text-center font-bold text-lg my-3'>Fast Delivery</h2>
                        <p className='text-center'>Our deliveries are top notch and one of it's kind, getting customers products to them on time has always been our priority.</p>
                        <div className='bg-black p-2 rounded-full my-3'>
                            <p className='text-white text-center'>No Delays</p>
                        </div>
                    </div>
                    <div className='bg-white p-2 my-3 shadow-sm rounded-md md:mx-auto'>
                        <TruckIcon className='h-28 w-20 mx-auto' />
                        <h2 className='text-center font-bold text-lg my-3'>Nationwide Delivery</h2>
                        <p className='text-center'>At Deeja collections, we offer nationwide deliveries. Order products from the comfort of your house and get it delivered to your door step with ease. No limitation to shopping with us.</p>
                        <div className='bg-black p-2 rounded-full my-3'>
                            <p className='text-white text-center'>Shop at ease</p>
                        </div>
                    </div>
                </div>

                {/* benefit text */}
                <div className='bg-white p-2 md:py-2 md:px-8'>
                    <h2 className='font-bold text-4xl'>At Deeja Collection we deal with luxurious & Quality Materials.</h2>
                    <p className='mt-3'>Never settle for less, shop with Deeja collections, be at ease, get quality products at affordable prices, compliment your outfits with our products and be the talk of the event.</p>
                    <h2 className='font-bold text-xl my-4'>Other Benefits Includes:</h2>
                    <p className='text-gray-500'><span className='font-bold'>o</span> Customer Satisfaction </p>
                    <p className='text-gray-500'><span className='font-bold'>o</span> 24/7 customer response </p>
                    <p className='text-gray-500'><span className='font-bold'>o</span> 1 week guarantee </p>
                    <p className='text-gray-500'><span className='font-bold'>o</span> Money Refund </p>
                    <div className='bg-black p-2 rounded-full my-5 md:hidden'>
                        <p className='text-white text-center'>Shop now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits