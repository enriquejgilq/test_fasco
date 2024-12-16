import { Typography } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';
import Paper from '@mui/material/Paper';

const CountdownTimer: React.FC = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <div  >
        <Paper className="h-[56px] w-[56px] flex items-center justify-center" >
          <Typography className="font-quartz text-[32px]" >{String(days).padStart(2, '0')}</Typography>
          </Paper>
          <span>Days</span>
        </div>
        <div>
          <Paper className="h-[56px] w-[56px] flex items-center justify-center" >
            <p className="font-quartz text-[32px]">{String(hours).padStart(2, '0')}</p>
          </Paper>
          <span>Hr</span>
        </div>
        <div>
          <Paper className="h-[56px] w-[56px] flex items-center justify-center" >
            <p className="font-quartz text-[32px]">{String(minutes).padStart(2, '0')}</p>
          </Paper>
          <span>Mins</span>
        </div>
        <div>
          <Paper className="h-[56px] w-[56px] flex items-center justify-center" >
            <p className="font-quartz text-[32px]">{String(seconds).padStart(2, '0')}</p>
          </Paper>
          <span>Sec</span>
        </div>
      </div>
    );
  };

  return (
    <Countdown date={Date.now() + 10000000} renderer={renderer} />

  );
};

export default CountdownTimer;
