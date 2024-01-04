import React from "react";
import { useRouter } from "next/router";

const Backdrop = ({ onClick }) => {
  const router = useRouter();
  const { undangan } = router.query;
  return (
    <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center '>
      <div className='fixed top-0 left-0 w-full h-full bg-backdrop'></div>
      <div className='bg-black bg-opacity-50 absolute inset-0 '></div>
      <div className=' text-white z-10  text-center mb-4'>
        <img
          src='/img-circle.png'
          alt='img-circle'
          className='w-60 mx-auto rounded-full '
        />
        <h1 className='text-3xl custom-text mb-4 text-gold pt-5'>
          Wahyudi & Vina
        </h1>
        <p>Undangan Pawiwahan</p>
        <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p>{undangan}</p>
      </div>

      <button
        className='bg-white text-black hover:bg-black hover:text-white hover:animate-pulse px-4 py-2 rounded-md relative z-10 '
        onClick={onClick}
      >
        Buka Undangan
      </button>
    </div>
  );
};

export default Backdrop;
