import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { FaMapMarkerAlt, FaClock, FaCalendarCheck } from "react-icons/fa";
import Countdown from "../Countdown/Countdown";
const Content = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center content-1 relative pb-20'>
        <div className='overlay-content'></div>
        <div className='spacer'></div>
      </div>
      <div className='relative text-white z-10 text-center bg-black'>
        <h2 className='text-3xl text-gold pb-8'>Hitung Mundur Acara</h2>
        <Countdown />
        <img
          src='./line-art.png'
          alt='line-art'
          className='w-96 items-center mx-auto py-8'
        />
      </div>
      <div className='text-center flex flex-col items-center relative bg-moment border-section px-5 lg:px-0 pb-10'>
        <div className='bg-moment-overlay'></div>
        <h2 className='text-3xl text-gold pb-5 '>Special Moment</h2>
        <div>
          <Card className='w-96 mx-auto relative bg-black'>
            <CardBody className='text-center relative border-2 border-ivory rounded-xl flex flex-col items-center'>
              <Typography
                variant='h2'
                className='text-gold text-2xl lg:text-3xl'
              >
                Resepsi
              </Typography>
              <div className='flex items-center text-white text-xl lg:text-2xl py-3'>
                <FaCalendarCheck className='mr-2 text-gold' />
                <span>Rabu, 10 April 2024</span>
              </div>
              <div className='flex items-center text-white text-xl lg:text-2xl py-3'>
                <FaClock className='mr-2 text-gold' />
                <span>11:30 WITA s/d 14:45 WITA</span>
              </div>
              <div className='flex items-center text-white text-xl lg:text-2xl py-3'>
                <FaMapMarkerAlt className='mr-2 text-gold' />
                <span>Taman Prakerti Bhuana, Beng, Gianyar, Bali</span>
              </div>
              <CardFooter className='p-7'>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Taman+Prakerti+Bhuana/@-8.525692,115.3259945,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd216542cc4ede7:0x2308fdb0be993019!8m2!3d-8.525692!4d115.3285694!16s%2Fg%2F11f01nhrg9?hl=id-ID&entry=ttu",
                      "_blank"
                    )
                  }
                  className='flex bg-gold w-52 items-center justify-center
                  text-black'
                >
                  <FaMapMarkerAlt className='mr-2 text-black' />
                  Lokasi Acara
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
          <div className='relative z-10 py-5'>
            <iframe
              title='Google Map'
              width='100%'
              height='400'
              style={{ border: 0 }}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7287721009966!2d115.32599447482676!3d-8.525691991516897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd216542cc4ede7%3A0x2308fdb0be993019!2sTaman%20Prakerti%20Bhuana!5e0!3m2!1sid!2sid!4v1704361346274!5m2!1sid!2sid'
              allowFullScreen
            ></iframe>
          </div>
          <div className=''>
            <p className='text-white w-3/4 mx-auto mb-6'>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan doa
              restu kepada kami.
            </p>
            <p className='text-white w-3/4 mx-auto mb-6'>
              Atas kehadiran serta doanya kami mengucapkan Terima Kasih.
            </p>
            <h2 className='text-gold mb-6 mx-auto text-2xl lg:text-3xl'>
              Om Shanti Shanti Shanti Om
            </h2>
            <span className='font-bold text-white mx-auto'>
              Kami yang Berbahagia
            </span>
            <h2 className='text-gold mb-6 mx-auto text-3xl hidden lg:block'>
              Kadek Wahyudi Remondo & Ni Made Vina Agustina Virgo
            </h2>
            <h2 className='text-gold text-2xl block lg:hidden custom-text'>
              Kadek Wahyudi Remondo
            </h2>
            <span className='text-gold text-2xl block lg:hidden custom-text py-2'>
              &
            </span>
            <h2 className='text-gold text-2xl block lg:hidden custom-text '>
              Ni Made Vina Agustina Virgo
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
