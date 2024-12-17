"use client";
import React, { useState } from 'react';
import LoginImage from '../components/assets/login';
import { Button, TextField } from '@mui/material';

export default function NewPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmationPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmationPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (!newPassword || !confirmationPassword) {
            setError('Both fields are required.');
            setSuccess('');
            return;
        }

        if (newPassword !== confirmationPassword) {
            setError('Passwords do not match.');
            setSuccess('');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((user: any) => user.email === 'enrique@test.com');

        if (user) {
            user.password = newPassword;

            localStorage.setItem('users', JSON.stringify(users));

            setSuccess('Your password has been successfully changed.');
            setError('');
            setNewPassword('');
            setConfirmationPassword('');

            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } else {
            setError('User not found.');
        }
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
                        Enter Your New Password
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
                        id="new-password"
                        label="New password"
                        variant="standard"
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                    />
                </div>

                <div className="mt-6">
                    <TextField
                        fullWidth
                        id="confirmation-password"
                        label="Confirmation Password"
                        variant="standard"
                        type="password"
                        value={confirmationPassword}
                        onChange={handleConfirmationPasswordChange}
                    />
                </div>

                <div className="flex flex-col gap-4 items-center mt-10">
                    <Button
                        className="bg-blue-500 text-white w-full lg:w-[575px]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
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
