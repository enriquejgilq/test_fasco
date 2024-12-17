import React from 'react';
import LoginImage from '../components/assets/login';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import img1 from '../components/assets/imgs/login/image_1.png'
import img2 from '../components/assets/imgs/login/image_2.png'
export default function Login() {
    return (
        <div className="flex relative rounded-tr-[30px] rounded-br-[30px]">

            <div className="flex-1">
                <LoginImage />
            </div>
            <div className="flex-1 flex flex-col p-16">
                <p className="text-[66.6px] font-volkhov">Fasco</p>
                <p className="text-[30px] font-volkhov font-light">Sign In To FASCO</p>

                <div className="flex justify-around w-full mt-4">
                    <Button
                        startIcon={
                            <img
                                src={img1.src}
                                alt="img"
                                className="w-6 h-6"
                            />
                        }
                        className="w-[294px] h-[55px] border-2 border-gray-300 rounded-md"
                        variant="outlined"
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        startIcon={
                            <img
                                src={img2.src}
                                alt="img"
                                className="w-6 h-6"
                            />
                        }
                        className="w-[294px] h-[55px] border-2 border-gray-300 rounded-md"
                        variant="outlined"
                    >
                        Sign up with Email
                    </Button>
                </div>

                <div className="flex justify-center w-full mt-4">
                    <p className="text-gray-500 font-poppins text-[25px] font-bold">-OR-</p>
                </div>

                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <div className="flex flex-col gap-2 items-center justify-center mt-10">
                    <Button className="bg-black text-white w-[575px]">
                        Sign In
                    </Button>
                    <Button variant="outlined" className="w-[575px]">
                        Register Now
                    </Button>
                </div>
                <div className="flex w-full justify-end mt-4">
                    <p className="text-blue-500 font-poppins text-[16px] font-bold cursor-pointer">
                    <Link href="/forget">Forget Password?</Link>   
                    </p>
                </div> 
                <div className="flex w-full justify-end mt-4">
                    <p className="font-poppins text-[16px] font-bold cursor-pointer">
                    FASCO Terms & Conditions
                    </p>
                </div>
                 
            </div>
        </div>


    );
}
