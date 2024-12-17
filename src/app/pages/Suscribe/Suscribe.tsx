import React from 'react'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import img1 from '../../components/assets/imgs/suscribe/image_1.png'
import img2 from '../../components/assets/imgs/suscribe/image_2.png'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Suscribe() {
    return (
        <section id="suscribe" className="page flex justify-center items-center flex-col">
            <div className="flex flex-row">
                <div>
                    <Image
                        src={img1.src}
                        alt="Image 1"
                        width={355}
                        height={224}
                    />
                </div>
                <div className="flex flex-col text-center max-w-lg">
                    <p className="text-[46px] font-volkhov leading-tight">
                        Subscribe To Our Newsletter
                    </p>
                    <p className="text-[16px] font-poppins mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                    </p>
                    <Paper elevation={3}>
                        <TextField fullWidth placeholder='michael@ymail.com'> </TextField>
                    </Paper>
                    <div className="flex justify-center mt-10">
                        <button className="w-[207px] h-[56px] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src={img2.src}
                        alt="Image 2"
                        width={355}
                        height={224}
                    />
                </div>
            </div>
        </section>
    )
}

export default Suscribe