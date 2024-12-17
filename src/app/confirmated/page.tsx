"use client";
import React, { useState } from 'react';
import LoginImage from '../components/assets/login';
import { Button, TextField } from '@mui/material';

export default function Confirmated() {
  const [enteredCode, setEnteredCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCode(e.target.value);
  };

  const handleConfirm = () => {
     const savedCode = localStorage.getItem('confirmationCode');
    const savedPassword = localStorage.getItem('userPassword');

    if (enteredCode === savedCode) {
       setUserPassword(savedPassword || '');
      setSuccess('Code confirmed successfully.');
      setError('');
      
        window.location.href = '/new-password';
    } else {
       setError('Invalid confirmation code.');
      setSuccess('');
    }
  };

  const handleResendCode = () => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    const userPassword = '123456';  
    
     localStorage.setItem('confirmationCode', generatedCode);
    localStorage.setItem('userPassword', userPassword);

    setConfirmationCode(generatedCode);
    setSuccess(`A new confirmation code has been sent to your phone.`);
    setError('');
    alert(`New confirmation code: ${generatedCode}`);  
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
          <p className="text-[20px] lg:text-[30px] font-volkhov font-light text-center lg:text-left">
            Enter The Confirmation Code
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

         <div className="mt-6">
          <TextField
            fullWidth
            id="confirmation-code"
            label="Confirmation Code"
            variant="standard"
            value={enteredCode}
            onChange={handleCodeChange}
          />
        </div>

         <div className="flex flex-col gap-4 items-center mt-10">
          <Button className="bg-black text-white w-full lg:w-[575px]" onClick={handleConfirm}>
            Recover Account
          </Button>
        </div>

        

        <div className="flex justify-center lg:justify-end mt-6">
          <p  onClick={handleResendCode} className="font-poppins text-[14px] lg:text-[16px] font-bold cursor-pointer text-center lg:text-right">
              Didn’t receive Confirmation Code? Resend Now
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
