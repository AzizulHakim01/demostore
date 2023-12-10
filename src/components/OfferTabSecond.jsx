import React from 'react'
import { Link } from 'react-router-dom'

const OfferTabSecond = () => {
  return (
    <div className='bg-[#fff] border-t-2 border-b-2'>
        <div className="md:w-[1152px] text-center mx-auto flex h-[150px] items-center justify-center text-zinc-900">
            <Link to={"/shop"} className='text-2xl font-bold hover:text-blue-900'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</Link>
        </div>
    </div>
  )
}

export default OfferTabSecond