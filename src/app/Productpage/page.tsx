'use client'
import Image from 'next/image';
import ProductImage_1 from 'public/img-02.jpg';
import ProductImage_2 from 'public/bag-1.jpg';
import ProductImage_3 from 'public/bag-3.jpg';
import ProductImage_4 from 'public/bag-4.png';
import ProductImage_6 from 'public/bag-6.png';
import ProductImage_7 from 'public/bag-7.png';
import ProductImage_5 from 'public/img-07.jpg';
import ProductImage_8 from 'public/oil-1.jpg';
import ProductImage_9 from 'public/oil-2.jpg';
import ProductImage_10 from 'public/oil-3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const ProductPage = () => {
    return (
        <div className='gen-container'>
            <h1 className='text-center text-5xl font-poppins font-bold my-4' id="Products">Our Products</h1>
            <h2 className='text-center font-light text-2xl text-yellow-600 pb-4'>What we sell</h2>
            <p className='text-center px-6'>Deeja collections is a home packed with luxurious, quality and highly affordable products. We deal in kinds of top-notch bags and oil perfume.</p>
            <p className='text-center mb-5'>Take a time out to glance through some of our products.</p>
            <div className='bg-slate-50 p-5'>
                <Swiper
                    effect = { 'coverflow' }
                    grabCursor = { true }
                    centeredSlides = { true } 
                    loop = { true }
                    spaceBetween={ 0 }
                    slidesPerView ={ 5 }
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows:false,
                        }}
                        pagination ={true}
                        modules ={[EffectCoverflow, Pagination, Navigation]}
                        className='mx-auto'
                >
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_1 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_2 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_3 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_4 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_5 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_6 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_7 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_8 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_9 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-52 h-52 rounded-md'>
                            <Image src ={ ProductImage_10 } alt="product image" fill = { true } style={ { objectFit: 'cover' } } />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProductPage;