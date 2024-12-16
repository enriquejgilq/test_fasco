import React from 'react';
import Image from 'next/image';
import img from '../../components/assets/imgs/d2fc5a879ffcc793dc57565cb166bdcd.png';
import CenterImg from '../../components/assets/imgs/centerimg'
import CenterText from '../../components/assets/imgs/textcenter'
import CenterText2 from '../../components/assets/imgs/textcenter2'
import CenterText3 from '../../components/assets/imgs/textcenter3'
import imgcentral from '../../components/assets/imgs/image.svg'
import imgright from '../../components/assets/imgs/image227.svg'
import imgbottom from '../../components/assets/imgs/logos.svg'
import { Button } from '@mui/material';

const Home = () => (
  <section id="home" className="page flex justify-center items-center"> 
    <div className=' w-[1281px]'> 
    <div className="flex flex-row justify-center gap-[19px] rounded-[10px] mt-10 ">
      <div className="bg-gray-300 w-[392px] h-[756px] flex justify-center items-end rounded-md">
        <Image src={img} alt="description" width={500} height={300} />
      </div>
      <div className="flex flex-col justify-between items-center ">
        <div className="bg-gray-300 rounded-sm" >
          <CenterImg />
        </div>
        <div className="flex flex-col justify-center items-center">
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
        <Image src={imgcentral} alt="description" width={426} height={150} />
      </div>

      <div className="bg-gray-300 w-[392px] h-[756px] flex justify-center items-end rounded-md">
        <Image src={imgright} alt="description" width={240} height={200} />
      </div>
    </div>
    <div className="flex content-center justify-center mt-10 ">
      <Image src={imgbottom} alt="description" width={1280} height={36} />
    </div>
    </div>
  </section>
);

export default Home;




