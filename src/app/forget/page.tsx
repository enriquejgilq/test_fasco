import React from 'react';
import LoginImage from '../components/assets/login';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import img1 from '../components/assets/imgs/login/image_1.png'
import img2 from '../components/assets/imgs/login/image_2.png'
export default function Forget() {
    return (
        <div className="flex relative rounded-tr-[30px] rounded-br-[30px]">

            <div className="flex-1">
                <LoginImage />
            </div>
            <div className="flex-1 flex flex-col p-16">
                <p className="text-[66.6px] font-volkhov">Fasco</p>
                <p className="text-[30px] font-volkhov">Forget Password</p>

                <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={6}>
                    <TextField fullWidth id="standard-basic" label="First Name" variant="standard" />
                    </Grid>
                    <Grid size={6}>
                    <TextField fullWidth id="standard-basic" label="Last Name " variant="standard" />
                    </Grid>
                    <Grid size={6}>
                    <TextField fullWidth id="standard-basic" label="Email Address" variant="standard" />
                    </Grid>
                    <Grid size={6}>
                    <TextField fullWidth id="standard-basic" label="Phone Number" variant="standard" />
                    </Grid>
                </Grid>
                <div className="flex flex-col gap-2 items-center justify-center mt-10">
                    <Button className="bg-black text-white w-[575px]">
                        Send Confirmation Code
                    </Button>
                </div>
                <div className="flex w-full justify-center mt-4">
                    <p className="font-poppins text-[16px]">Already have an account?&nbsp;&nbsp;&nbsp;</p> <p className="text-blue-500 font-poppins text-[16px] font-bold cursor-pointer">  <Link href="/login">Login</Link> </p>
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
