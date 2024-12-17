import React from 'react';
import Image from 'next/image';
import img from '../../components/assets/imgs/d2fc5a879ffcc793dc57565cb166bdcd.png';
import CenterImg from '../../components/assets/imgs/centerimg';
import CenterText from '../../components/assets/imgs/textcenter';
import CenterText2 from '../../components/assets/imgs/textcenter2';
import CenterText3 from '../../components/assets/imgs/textcenter3';
import imgcentral from '../../components/assets/imgs/image.svg';
import imgright from '../../components/assets/imgs/image227.svg';
import imgbottom from '../../components/assets/imgs/logos.svg';
import { Button } from '@mui/material';

const Home = () => (
  <section id="home" className="page flex justify-center items-center px-4">
    <div className="w-full max-w-screen-xl">
       <div className="flex flex-col md:flex-row justify-center gap-5 rounded-[10px] mt-10">
        
         <div className="bg-gray-300 w-full md:w-[392px] h-[756px] flex justify-center items-end rounded-md hidden md:block">
          <Image src={img} alt="description" width={500} height={300} layout="intrinsic" />
        </div>

         <div className="flex flex-col justify-between items-center space-y-4">
          <div className="bg-gray-300 rounded-sm">
            <CenterImg />
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <CenterText />
            <CenterText2 />
            <CenterText3 />
          </div>
          <div>
            <Button
              sx={{
                width: '207px',
                height: '56px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              SHOP NOW
            </Button>
          </div>
          <Image src={imgcentral} alt="description" width={426} height={150} layout="intrinsic" />
        </div>

         <div className="bg-gray-300 w-full md:w-[392px] h-[756px] flex justify-center items-end rounded-md hidden md:block">
          <Image src={imgright} alt="description" width={240} height={200} layout="intrinsic" />
        </div>
      </div>

       <div className="flex justify-center mt-10">
        <Image src={imgbottom} alt="description" width={1280} height={36} layout="intrinsic" />
      </div>
    </div>
  </section>
);

export default Home;
