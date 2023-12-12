import React from 'react'
import { Link } from 'react-router-dom'

const OfferTab = () => {
  return (
    <div className='md:w-[1152px] py-10 mx-auto grid md:grid-cols-3 gap-10 grid-cols-1'>
        <div className="bg-[url('/images/offer_1.jpg')] bg-cover md:bg-center bg-top bg-no-repeat w-full md:h-[500px]">
            <div className="bg-black h-full bg-opacity-40 flex flex-col gap-4 justify-end px-8 py-6">
                <h1 className='text-3xl font-semibold text-white'>20% Off On Tank Tops</h1>
                <p className='text-md text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <Link to={"/store"} className='text-center bg-white font-medium py-3'>SHOP NOW</Link>
            </div>
        </div>
        <div className="bg-[url('/images/offer_2.jpg')] md:bg-center bg-top bg-cover bg-no-repeat w-full md:h-[500px]">
            <div className="bg-black h-full bg-opacity-40 flex flex-col gap-4 justify-end px-8 py-6">
                <h1 className='text-3xl font-semibold text-white'>20% Off On Tank Tops</h1>
                <p className='text-md text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <Link to={"/store"} className='text-center bg-white font-medium py-3'>SHOP NOW</Link>
            </div>
        </div>
        <div className="bg-[url('/images/offer_3.jpg')] md:bg-center bg-top bg-cover bg-no-repeat w-full md:h-[500px]">
            <div className="bg-black h-full bg-opacity-40 flex flex-col gap-4 justify-end px-8 py-6">
                <h1 className='text-3xl font-semibold text-white'>20% Off On Tank Tops</h1>
                <p className='text-md text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                <Link to={"/store"} className='text-center bg-white font-medium py-3'>SHOP NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default OfferTab