import { Typography } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';
import Paper from '@mui/material/Paper';

const CountdownTimer: React.FC = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center">
          <Paper className="h-[56px] w-[56px] flex items-center justify-center">
            <p className="font-quartz text-[24px] sm:text-[32px]">{String(days).padStart(2, '0')}</p>
          </Paper>
          <span className="text-sm sm:text-base">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <Paper className="h-[56px] w-[56px] flex items-center justify-center">
            <p className="font-quartz text-[24px] sm:text-[32px]">{String(hours).padStart(2, '0')}</p>
          </Paper>
          <span className="text-sm sm:text-base">Hr</span>
        </div>
        <div className="flex flex-col items-center">
          <Paper className="h-[56px] w-[56px] flex items-center justify-center">
            <p className="font-quartz text-[24px] sm:text-[32px]">{String(minutes).padStart(2, '0')}</p>
          </Paper>
          <span className="text-sm sm:text-base">Mins</span>
        </div>
        <div className="flex flex-col items-center">
          <Paper className="h-[56px] w-[56px] flex items-center justify-center">
            <p className="font-quartz text-[24px] sm:text-[32px]">{String(seconds).padStart(2, '0')}</p>
          </Paper>
          <span className="text-sm sm:text-base">Sec</span>
        </div>
      </div>
    );
  };

  return (
    <Countdown date={Date.now() + 10000000} renderer={renderer} />
  );
};

export default CountdownTimer;
