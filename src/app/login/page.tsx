import React from 'react';
import LoginImage from '../components/assets/login';
import { Button } from '@mui/material';

export default function Login() {
  return (
    <div style={{ display: 'flex', width: '1920px', height: '1077px', top: '126px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', border: '1px' }}>
      <div style={{ flex: 1 }}>
        <LoginImage />
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '66.6px', fontFamily: 'Volkhov' }}> Fasco</p>
        <p style={{ fontFamily: 'Volkhov', fontWeight: '400', fontSize: '30px' }}> Sign In To FASCO</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button sx={{ width: '294px', height: '55px', borderRadius: '8px' }} variant='outlined'> Sign up with Google </Button>
          <button style={{ border: '1px solid #5B86E5' }}> Sign up Email </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p> -or-</p>
        </div>
      </div>
    </div>
  );
}
