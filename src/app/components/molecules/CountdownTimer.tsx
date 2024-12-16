import { Typography } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer: React.FC = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div style={{fontFamily:'Orbitron'}}> 
            
          <Typography>{String(days).padStart(2, '0')}</Typography>
          <span>Days</span>
        </div>
        <div>
          <p>{String(hours).padStart(2, '0')}</p>
          <span>Hr</span>
        </div>
        <div>
          <p  style={{fontFamily:'Orbitron'}}>{String(minutes).padStart(2, '0')}</p>
          <span>Mins</span>
        </div>
        <div>
          <p>{String(seconds).padStart(2, '0')}</p>
          <span>Sec</span>
        </div>
      </div>
    );
  };

  return (
  <p style={{fontFamily:'Orbitron, sans-serif'}}>  1 23 </p>
  );
};

export default CountdownTimer;
