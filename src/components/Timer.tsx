import React, { useEffect, useState } from 'react';

const Timer = () => {
  const initialTargetDate = new Date('2023-12-01T00:00:00');
  const [targetDate, setTargetDate] = useState(initialTargetDate);
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate.getTime() - Date.now()
  );
  const [timerEnded, setTimerEnded] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const performReset = () => {
    setTargetDate(initialTargetDate);
    setTimeRemaining(initialTargetDate.getTime() - Date.now());
    setTimerEnded(false);
    setResetTimer(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = targetDate.getTime() - Date.now();
      setTimeRemaining(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimerEnded(true);
      }

      if (resetTimer) {
        performReset();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate, resetTimer]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="my-6 ">
      {timerEnded ? (
        <p className="text-xl text-[32px] text-center  font-semibold text-black dark:text-white">
          Registrations closed
        </p>
      ) : (
        <div className="my-4 flex justify-center ">
          <div className="mx-2 flex w-auto items-center justify-center bg-[#7D7D7D] p-3">
            <div>
              <p className="countdown font-mono text-center text-[22px] text-white md:text-[28px]">
                {days}
              </p>
              <p className="pt-2 text-center text-[18px] text-white md:text-[16px]">
                days
              </p>
            </div>
          </div>
          <div className="mx-2 flex w-auto items-center justify-center bg-[#7D7D7D] p-3">
            <div>
              <p className="countdown font-mono text-center text-[22px] text-white md:text-[28px]">
                {' '}
                {hours}
              </p>
              <p className="pt-2 text-center text-[18px] text-white md:text-[16px]">
                hours
              </p>
            </div>
          </div>
          <div className="mx-2 flex w-auto items-center justify-center bg-[#7D7D7D] p-3">
            <div>
              <p className="countdown font-mono text-center text-[22px] text-white md:text-[28px]">
                {minutes}
              </p>
              <p className="pt-2 text-center text-[18px] text-white md:text-[16px]">
                min
              </p>
            </div>
          </div>
          <div className="mx-2 flex w-auto items-center justify-center bg-[#7D7D7D] p-3">
            <div>
              <p className="countdown font-mono text-center text-[22px] text-white md:text-[28px]">
                {' '}
                {seconds}
              </p>
              <p className="pt-2 text-center text-[18px] text-white md:text-[16px]">
                sec
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
