import React, { useEffect } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);
  return (
    <div className='container mx-auto  text-center py-16 px-5 lg:py-16'>
      <div className='relative flex py-5 items-center'>
        <div className='flex-grow border-t border-gold'></div>
        <h2
          className='flex-shrink mx-4 text-gold text-3xl custom-text'
          data-aos='fade-down'
        >
          Moment Kami
        </h2>
        <div className='flex-grow border-t border-gold'></div>
      </div>

      <div
        className='mx-auto flex justify-center items-center'
        data-aos='fade-up'
        data-aos-anchor-placement='top-center'
      >
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
          <a href='./groom.png'>
            <img className='w-60 inline-block p-2' src='./groom.png' alt='' />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
