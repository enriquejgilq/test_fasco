import React from 'react'
import CountdownTimer from '@/app/components/molecules/CountdownTimer'
import GaleryImages from '@/app/components/molecules/GaleryImages'
import { Button } from '@mui/material'



export const Deals = () => {
    return (
        <section id="deals" className="page flex justify-center">
            <div className="w-[1281px]">
                <div className="flex flex-row justify-between gap-[19px] rounded-[10px] mt-10">
                    <div className="rounded-[10px] w-1/2">
                        <div className="flex flex-col w-full">
                            <p className="text-[59px] font-volkhov">Deals Of The Month</p>
                            <div className="flex w-[436px] flex-col items-start gap-[19px] ">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                                </p>
                                <Button
                                    sx={{
                                        width: '207px',
                                        height: '56px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    }}
                                >
                                    Buy Now
                                </Button>
                                <p className='text-[28px] font-poppins '> Hurry, Before It’s Too Late!</p>
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 p-5">
                        <div style={{height:'582px'}} className="flex ">
                             <GaleryImages/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
 