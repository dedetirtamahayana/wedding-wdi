import React from "react";

const Banner = () => {
  return (
    <div className='text-center flex flex-col items-center border-section'>
      <img src='/mandala.png' alt='Mandala' className=' w-full lg:w-2/5' />
      <div className='bg-overlay'></div>
      <div className='py-14'>
        <p className='text-gold custom-text text-xl pb-2 lg:pb-0 lg:text-3xl'>
          The Wedding Of
        </p>
        <h1 className='text-gold text-5xl hidden lg:block custom-text py-7'>
          Kadek Wahyudi Remondo & Ni Made Vina Agustina Virgo
        </h1>
        <h1 className='text-gold text-2xl block lg:hidden custom-text'>
          Kadek Wahyudi Remondo
        </h1>
        <span className='text-gold text-2xl block lg:hidden custom-text py-2'>
          &
        </span>
        <h1 className='text-gold text-2xl block lg:hidden custom-text '>
          Ni Made Vina Agustina Virgo
        </h1>
        <img
          src='./line-art.png'
          alt='line-art'
          className='w-96 items-center mx-auto py-7 lg:pb-7'
        />
        <p className='text-2xl custom-text text-gold'>Bali | 10 April 2024</p>
      </div>
    </div>
  );
};

export default Banner;
