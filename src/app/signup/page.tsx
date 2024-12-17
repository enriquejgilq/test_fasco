"use client"
import React, { useState } from 'react';
import SignupImage from '../components/assets/signup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import img1 from '../components/assets/imgs/login/image_1.png';
import img2 from '../components/assets/imgs/login/image_2.png';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
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
    const { firstName, lastName, email, phone, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

     const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

     const emailExists = existingUsers.some((user: any) => user.email === email);
    if (emailExists) {
      setError('Email is already registered.');
      return;
    }

     const newUser = { firstName, lastName, email, phone, password };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

     setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
    alert('Account created successfully!');
  };

  return (
    <div className="flex flex-col lg:flex-row relative min-h-screen">
      <div className="hidden lg:block lg:flex-1">
        <SignupImage />
      </div>
      <div className="flex flex-col flex-1 px-6 py-8 lg:p-16 justify-between">
        <div className="flex flex-col justify-between flex-1 px-6 py-8 lg:p-16 lg:justify-start">
          <div className="mb-8">
            <p className="text-[36px] lg:text-[66.6px] font-volkhov text-center lg:text-left">
              Fasco
            </p>
            <p className="text-[20px] lg:text-[30px] font-volkhov font-light text-center lg:text-left">
              Sign Up To FASCO
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <TextField
              id="firstName"
              label="First Name"
              variant="standard"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="standard"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="phone"
              label="Phone Number"
              variant="standard"
              fullWidth
              value={formData.phone}
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
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="standard"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="col-span-full flex justify-center">
              <Button
                className="bg-black w-full lg:w-[294px] h-[55px] border-2 border-gray-300 rounded-md"
                variant="outlined"
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </div>
            <div className="col-span-full flex justify-center">
              <p className="font-poppins text-[14px] lg:text-[16px]">
                Already have an account?&nbsp;
              </p>
              <p className="text-blue-500 font-poppins text-[14px] lg:text-[16px] font-bold cursor-pointer">
                <Link href="/login">Login</Link>
              </p>
            </div>
          </div>
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
