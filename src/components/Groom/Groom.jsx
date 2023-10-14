import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
const Groom = () => {
  return (
    <div className='container mx-auto text-center my-24'>
      <div className=' mb-5'>
        <h2 className='text-3xl text-gold custom-text'>Om Swastiastu</h2>
        <p className='text-white w-3/4 mx-auto'>
          Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa, kami
          bermaksud mengundang Bapak/Ibu/Saudara/i pada upacara manusa yadnya
          Pawiwahan/Pernikahan kami
        </p>
      </div>
      <div className='grid grid-cols-5 gap-4 text-center'>
        <div className='col-span-2 flex justify-center'>
          <Card className='w-96 mx-auto relative bg-black bg-opacity-40'>
            <CardHeader floated={false} className='h-auto bg-transparent'>
              <img src='/groom.png' alt='profile-picture' />
            </CardHeader>
            <CardBody className='text-center relative'>
              <Typography variant='h4' className='text-gold'>
                Kadek Wahyudi Remondo
              </Typography>
              <Typography className='font-medium text-white' textGradient>
                Putra Pertama Dari Pasangan Bapak Putra & Ibu Putri Bangli-Bali
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
          <img src='./Icon-mid-01.png' alt='IconMid' />
        </div>
        <div className='col-span-2 flex justify-center'>
          <Card className='w-96 mx-auto relative bg-black bg-opacity-40'>
            <CardHeader floated={false} className='h-auto bg-transparent'>
              <img src='/groom.png' alt='profile-picture' />
            </CardHeader>
            <CardBody className='text-center relative'>
              <Typography variant='h4' className='text-gold'>
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
          src='./line-art-fix.png'
          alt='line-art'
          className='w-96 items-center mx-auto pb-7'
        />
        <p className='text-white w-3/4 mx-auto'>
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
