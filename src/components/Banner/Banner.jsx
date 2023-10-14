import React from "react";

const Banner = () => {
  return (
    <div className='text-center flex flex-col items-center border-section'>
      <img src='/mandala.png' alt='Mandala' className='w-2/5' />
      <div className='bg-overlay'></div>
      <div className='py-14'>
        <p className='text-gold custom-text text-3xl'>The Wedding Of</p>
        <h1 className='text-gold text-5xl custom-text py-7'>
          Kadek Wahyudi Remondo & Ni Made Vina Agustina Virgo
        </h1>
        <img
          src='./line-art.png'
          alt='line-art'
          className='w-96 items-center mx-auto pb-7'
        />
        <p className='text-2xl custom-text text-gold'>Bali | 10 April 2024</p>
      </div>
    </div>
  );
};

export default Banner;
