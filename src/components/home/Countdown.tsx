
import React, { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-04-24T00:00:00Z"); // Phase 2 date (UTC)

function getTimeRemaining(target: Date) {
  const total = target.getTime() - new Date().getTime();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds, expired: false };
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(TARGET_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-lg font-bold text-mali-green mt-2 animate-fade-in">
        Les résultats sont disponibles !
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 text-lg font-semibold text-mali-blue mt-4">
      <span>
        {timeLeft.days}j
      </span>
      <span>:</span>
      <span>
        {timeLeft.hours.toString().padStart(2, "0")}h
      </span>
      <span>:</span>
      <span>
        {timeLeft.minutes.toString().padStart(2, "0")}m
      </span>
      <span>:</span>
      <span>
        {timeLeft.seconds.toString().padStart(2, "0")}s
      </span>
    </div>
  );
};

export default Countdown;
