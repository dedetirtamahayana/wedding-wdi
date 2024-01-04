import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner2 = () => {
  return (
    <div className='relative overflow-hidden'>
      {/* Container untuk gambar dan firefly */}
      <div className='relative'>
        <Carousel
          className='overflow-hidden'
          style={{ height: "700px" }}
          autoplay={false}
          controls={false}
          navigation={false}
          loop={true}
          transition={{ duration: 2 }}
        >
          <div className='relative h-full w-full flex items-center justify-center'>
            <img
              src='../3.jpg'
              alt='image 1'
              className='h-full w-full object-cover bg-right'
            />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
            </div>
          </div>
          <div className='relative h-full w-full flex items-center justify-center'>
            <img
              src='../6.jpg'
              alt='image 2'
              className='h-full w-full object-cover bg-right'
            />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
            </div>
          </div>
          <div className='relative h-full w-full  flex items-center'>
            <img src='../20.jpg' alt='image 2' className='bg-cover' />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
            </div>
          </div>
          <div className='relative h-full w-full  flex items-center'>
            <img src='../7.jpg' alt='image 2' className='bg-cover' />
            <div className='absolute inset-0 grid h-full w-full items-center bg-black/75'>
              <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className='absolute bottom-0 left-0 right-0 text-center pb-16 '>
        <Typography
          variant='h1'
          className='mb-4 text-3xl md:text-4xl lg:text-7xl custom-text text-gold'
        >
          Wahyudi & Vina
        </Typography>
        <Typography
          variant='lead'
          color='white'
          className='mb-3 custom-text text-gold'
        >
          10 April 2024
        </Typography>
        <Typography
          variant='lead'
          color='white'
          className='custom-text text-gold'
        >
          Save The Date
        </Typography>
      </div>
    </div>
  );
};

export default Banner2;
