import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaMapMarkerAlt, FaClock, FaCalendarCheck } from "react-icons/fa";
const Content = () => {
  return (
    <>
      <div className='text-center flex flex-col items-center content-1 relative'>
        <div className='overlay-content'></div>
        <div className='spacer'></div>
        <div className='relative text-white z-10'>
          <h2 className='text-3xl text-gold'>Hitung Mundur Acara</h2>
          <span>Acara Telah Berlangsung</span>
          <img
            src='./line-art.png'
            alt='line-art'
            className='w-96 items-center mx-auto my-8'
          />
        </div>
      </div>
      <div className='text-center flex flex-col items-center relative bg-moment border-section'>
        <div className='bg-moment-overlay'></div>
        <h2 className='text-3xl text-gold pb-5'>Special Moment</h2>
        <div>
          <Card className='w-96 mx-auto relative bg-black'>
            <CardBody className='text-center relative border-2 border-ivory rounded-xl p flex flex-col items-center'>
              <Typography variant='h2' className='text-gold'>
                Resepsi
              </Typography>
              <div className='flex items-center text-white text-2xl py-3'>
                <FaCalendarCheck className='mr-2 text-gold' />
                <span>Senin, 22 Agustus 2022</span>
              </div>
              <div className='flex items-center text-white text-2xl py-3'>
                <FaClock className='mr-2 text-gold' />
                <span>10:00 WITA s/d Selesai</span>
              </div>
              <div className='flex items-center text-white text-2xl py-3'>
                <FaMapMarkerAlt className='mr-2 text-gold' />
                <span>Tembuku, Bangli-Bali</span>
              </div>
              <CardFooter className='p-7'>
                <Button className='flex bg-gold w-52 items-center justify-center text-black'>
                  <FaMapMarkerAlt className='mr-2 text-black' />
                  Lokasi
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
          <div className='mt-8'>
            <p className='text-white w-3/4 mx-auto mb-6'>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan doa
              restu kepada kami.
            </p>
            <p className='text-white w-3/4 mx-auto mb-6'>
              Atas kehadiran serta doanya kami mengucapkan Terima Kasih.
            </p>
            <h2 className='text-gold mb-6 mx-auto text-3xl'>
              Om Shanti Shanti Shanti Om
            </h2>
            <span className='font-bold text-white mx-auto'>
              Kami yang Berbahagia
            </span>
            <h2 className='text-gold mb-6 mx-auto text-3xl'>
              Kadek Wahyudi Remondo & Ni Made Vina Agustina Virgo
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
