import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className='container mx-auto  text-center'>
      <div className='relative flex py-5 items-center'>
        <div className='flex-grow border-t border-gold'></div>
        <h2 className='flex-shrink mx-4 text-gold text-3xl custom-text'>
          Moment Kami
        </h2>
        <div className='flex-grow border-t border-gold'></div>
      </div>

      <div className='mx-auto flex justify-center items-center'>
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
