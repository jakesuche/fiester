import { useEffect, useState } from 'react';

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

interface Props {
  endDate: Date;
  onEnded?: () => void;
}

export const useCountdown = ({ endDate, onEnded }: Props): Time => {
  const [countdown, setCountdown] = useState<Time>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const totalSeconds = Math.floor((endDate.getTime() - new Date().getTime()) / 1000);
      if (totalSeconds <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true });
        clearInterval(intervalId);
        if (onEnded) {
          onEnded();
        }
      } else {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        setCountdown({ days, hours, minutes, seconds, isEnded: false });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endDate, onEnded]);

  return countdown;
};
