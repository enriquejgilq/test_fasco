"use client"
import React, { useState } from 'react';
import LoginImage from '../components/assets/login';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import img1 from '../components/assets/imgs/login/image_1.png';
import img2 from '../components/assets/imgs/login/image_2.png';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user: any) => user.email === email && user.password === password);

    if (!user) {
      setError('Invalid email or password.');
      return;
    }

    setError('');
    alert('Login successful!');
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col lg:flex-row relative min-h-screen">
      <div className="hidden lg:block lg:flex-1">
        <LoginImage />
      </div>

      <div className="flex flex-col justify-between flex-1 px-6 py-8 lg:p-16 lg:justify-start">
        <div className="mb-8">
          <p className="text-[36px] lg:text-[66.6px] font-volkhov text-center lg:text-left">
            Fasco
          </p>
          <p className="text-[20px] lg:text-[30px] font-volkhov font-light text-center lg:text-left">
            Sign In To FASCO
          </p>
        </div>

        {error && (
          <div className="text-red-500 font-poppins text-[16px] lg:text-[18px] text-center mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-center lg:justify-around w-full mt-4 gap-4">
          <Button
            startIcon={
              <img
                src={img1.src}
                alt="Google Icon"
                className="w-6 h-6"
              />
            }
            className="w-full lg:w-[294px] h-[55px] border-2 border-gray-300 rounded-md"
            variant="outlined"
          >
            Sign up with Google
          </Button>
          <Button
            startIcon={
              <img
                src={img2.src}
                alt="Email Icon"
                className="w-6 h-6"
              />
            }
            className="w-full lg:w-[294px] h-[55px] border-2 border-gray-300 rounded-md"
            variant="outlined"
          >
            Sign up with Email
          </Button>
        </div>

        <div className="flex justify-center w-full mt-6">
          <p className="text-gray-500 font-poppins text-[18px] lg:text-[25px] font-bold">
            -OR-
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center mt-10">
          <Button
            className="bg-black text-white w-full lg:w-[575px]"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Button variant="outlined" className="w-full lg:w-[575px]">
            <Link href="/signup">
              Register Now
            </Link>

          </Button>
        </div>

        <div className="flex w-full justify-center lg:justify-end mt-4">
          <p className="text-blue-500 font-poppins text-[14px] lg:text-[16px] font-bold cursor-pointer">
            <Link href="/forget">Forget Password?</Link>
          </p>
        </div>

        <div className="flex w-full justify-center lg:justify-end mt-auto pt-8">
          <p className="font-poppins text-[14px] lg:text-[16px] font-bold cursor-pointer">
            FASCO Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
