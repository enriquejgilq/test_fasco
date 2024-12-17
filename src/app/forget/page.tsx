"use client";
import React, { useState } from 'react';
import { Button } from '@mui/material';
import LoginImage from '../components/assets/login';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

export default function Forget() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phone } = formData;

    if (!firstName || !lastName || !email || !phone) {
      setError('All fields are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user: any) =>
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.email === email &&
      user.phone === phone
    );

    if (!user) {
      setError('No user found with these details.');
      setSuccess('');
      return;
    }

    // Generate confirmation code and store it in localStorage
    const generatedCode = Math.floor(100000 + Math.random() * 900000); 
    setConfirmationCode(generatedCode.toString());
    setSuccess(`A confirmation code has been sent to ${phone}.`);
    setError('');
    
    // Save the confirmation code and the user's password in localStorage for later use
    localStorage.setItem('confirmationCode', generatedCode.toString());
    localStorage.setItem('userPassword', user.password);

    alert(`Confirmation code sent: ${generatedCode}`);
    window.location.href = '/confirmated';  // Redirect to the confirmation page
  };

  return (
    <div className="flex flex-col lg:flex-row relative min-h-screen">
      <div className="hidden lg:block lg:flex-1">
        <LoginImage />
      </div>

      <div className="flex flex-col flex-1 px-6 py-8 lg:p-16 justify-between">
        <div>
          <p className="text-[36px] lg:text-[66.6px] font-volkhov text-center lg:text-left">
            Fasco
          </p>
          <p className="text-[20px] lg:text-[30px] font-volkhov text-center lg:text-left">
            Forget Password
          </p>
        </div>

        {error && (
          <div className="text-red-500 font-poppins text-[16px] lg:text-[18px] text-center mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-500 font-poppins text-[16px] lg:text-[18px] text-center mb-4">
            {success}
          </div>
        )}

        <Grid container spacing={2} className="mt-6">
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              label="First Name"
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              fullWidth
              id="phone"
              label="Phone Number"
              variant="standard"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <div className="flex flex-col gap-4 items-center mt-10">
          <Button
            className="bg-black text-white w-full lg:w-[575px]"
            onClick={handleSubmit}
          >
            Send Confirmation Code
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          <p className="font-poppins text-[14px] lg:text-[16px]">
            Already have an account?&nbsp;
          </p>
          <p className="text-blue-500 font-poppins text-[14px] lg:text-[16px] font-bold cursor-pointer">
            <Link href="/login">Login</Link>
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
