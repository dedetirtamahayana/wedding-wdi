import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const LoveStory = () => {
  return (
    <div className='section-bg-story border-top border-bottom relative'>
      <div className='bg-black bg-opacity-50 absolute inset-0'></div>
      <div className='text-center relative z-10 pt-8'>
        <h2 className='text-gold text-3xl custom-text my-9'>Our Love Story</h2>
      </div>
      <div className='flex justify-center items-center space-x-4 text-center mb-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center text-center'>
            <Card className='max-w-[40rem] overflow-hidden'>
              <CardHeader
                floated={false}
                shadow={false}
                color='transparent'
                className='m-0 rounded-none'
              >
                <img
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                  alt='ui/ux review check'
                />
              </CardHeader>
              <CardBody className='bg-card'>
                <Typography variant='h4' color='blue-gray'>
                  Pertemuan Pertama
                </Typography>
                <Typography
                  variant='lead'
                  color='gray'
                  className='mt-3 font-normal'
                >
                  Putra & Putri Bertemu setelah berkenalan lewat sosial media
                </Typography>
              </CardBody>
            </Card>
            {/* Tombol di bawah kartu Pertemuan Pertama */}
            <div className='hover:animate-pulse z-10'>
              <Popover
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                placement='bottom'
              >
                <PopoverHandler>
                  <Button className='z-10 rounded-full p-2 bg-gold my-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z' />
                    </svg>
                  </Button>
                </PopoverHandler>
                <PopoverContent className='text-black'>
                  08 Agustus 2018
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <Card className='max-w-[40rem] overflow-hidden'>
              <CardHeader
                floated={false}
                shadow={false}
                color='transparent'
                className='m-0 rounded-none'
              >
                <img
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                  alt='ui/ux review check'
                />
              </CardHeader>
              <CardBody className='bg-card'>
                <Typography variant='h4' color='blue-gray'>
                  Hari Jadi
                </Typography>
                <Typography
                  variant='lead'
                  color='gray'
                  className='mt-3 font-normal'
                >
                  Putra & Putri menjalin hubungan pacaran
                </Typography>
              </CardBody>
            </Card>
            {/* Tombol di bawah kartu Hari Jadi */}

            <div className='hover:animate-pulse z-10'>
              <Popover
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                placement='bottom'
              >
                <PopoverHandler>
                  <Button className='z-10 rounded-full p-2 bg-gold my-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                    </svg>
                  </Button>
                </PopoverHandler>
                <PopoverContent className='text-black'>
                  08 Agustus 2018
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveStory;
