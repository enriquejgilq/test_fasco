import React from 'react';
import CountdownTimer from '@/app/components/molecules/CountdownTimer';
import GaleryImages from '@/app/components/molecules/GaleryImages';
import { Button } from '@mui/material';

export const Deals = () => {
    return (
        <section id="deals" className="page flex justify-center px-4">
            <div className="w-full max-w-screen-xl">
                <div className="flex flex-col md:flex-row justify-between gap-[19px] rounded-[10px] mt-5">
                     <div className="rounded-[10px] w-full md:w-1/2">
                        <div className="flex flex-col w-full">
                            <p className="text-[32px] md:text-[59px] font-volkhov text-center md:text-left">Deals Of The Month</p>
                            <div className="flex w-full flex-col items-center md:items-start gap-[19px] px-4">
                                <p className="text-center md:text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                                </p>
                                <Button
                                    sx={{
                                        width: '100%',
                                        maxWidth: '207px',
                                        height: '56px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    }}
                                >
                                    Buy Now
                                </Button>
                                <p className="text-[20px] md:text-[28px] font-poppins text-center md:text-left">Hurry, Before It’s Too Late!</p>
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-5">
                        <div className="flex justify-center md:justify-start" style={{ height: '582px' }}>
                            <GaleryImages />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
