import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
const Groom = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);
  return (
    <div className='container mx-auto text-center my-12 lg:my-24 overflow-hidden'>
      <div className=' mb-10 lg:mb-5' data-aos='flip-up'>
        <h2 className='text-3xl text-gold custom-text'>Om Swastiastu</h2>
        <p className='text-white w-3/4 mx-auto'>
          Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa, kami
          bermaksud mengundang Bapak/Ibu/Saudara/i pada upacara manusa yadnya
          Pawiwahan/Pernikahan kami
        </p>
      </div>
      <div className='grid lg:grid-cols-5 gap-4 text-center'>
        <div className='col-span-2 flex justify-center' data-aos='fade-right'>
          <Card className='w-64 lg:w-96 mx-auto relative bg-black bg-opacity-40'>
            <CardHeader floated={false} className='h-auto bg-transparent'>
              <img src='/groom.png' alt='profile-picture' />
            </CardHeader>
            <CardBody className='text-center relative'>
              <Typography
                variant='h4'
                className=' text-xl lg:text-2xl text-gold'
              >
                Kadek Wahyudi Remondo
              </Typography>
              <Typography className='font-medium text-white' textGradient>
                Putra Pertama Dari Pasangan Bapak Putra & Ibu Putri Bangli-Bali
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className=' col-span-2 lg:col-span-1 flex justify-center items-center '>
          <img src='./Icon-mid-01.png' alt='IconMid' />
        </div>
        <div className='col-span-2 flex justify-center' data-aos='fade-left'>
          <Card className='w-64 lg:w-96 mx-auto relative bg-black bg-opacity-40'>
            <CardHeader floated={false} className='h-auto bg-transparent'>
              <img src='/groom.png' alt='profile-picture' />
            </CardHeader>
            <CardBody className='text-center relative'>
              <Typography
                variant='h4'
                className=' text-xl lg:text-2xl text-gold'
              >
                Ni Made Vina Agustina Virgo
              </Typography>
              <Typography className='font-medium text-white' textGradient>
                Putra Pertama Dari Pasangan Bapak Putra & Ibu Putri Bangli-Bali
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className='my-5'>
        <img
          src='./line-art.png'
          alt='line-art'
          className='w-96 items-center mx-auto py-7'
        />
        <p className='text-white px-5 lg:w-3/4 mx-auto'>
          “Dalam sebuah pernikahan kalian disatukan demi sebuah kebahagiaan
          dengan janji hati untuk saling membahagiakan. Bersamaku engkau akan
          hidup selamanya karena Tuhan pasti akan memberikan karunia sebagai
          pelindung dan saksi dalam pernikahan ini. Untuk itulah kalian
          dipersatukan dalam satu keluarga.”
        </p>
      </div>
      <div>
        <p className='text-white font-bold'>Rgveda : X.85.36</p>
      </div>
    </div>
  );
};

export default Groom;
