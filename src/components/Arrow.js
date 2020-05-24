import React, { useState } from 'react';

const Arrow = ({ direction }) => {
  const [isActive, setIsActive] = useState(false);

  if (direction === 'top') {
    return (
      <svg onClick={() => setIsActive(!isActive)} className={isActive ? 'active' : ''} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="linear-gradient" gradientTransform="rotate(65)">
          <stop offset="0%" stopColor="#FDD226"/>
          <stop offset="100%" stopColor="#FF5753"/>
        </linearGradient>
        <path opacity="0.4" d="M5.33573 0.442092L8.75813 4.87983C8.91629 5.08477 9 5.29127 9 5.46291C9 5.79473 8.69999 6 8.19782 6L0.801016 6C0.299425 6 2.44469e-09 5.79499 6.39245e-09 5.46394C8.44229e-09 5.29204 0.0837813 5.08885 0.242381 4.88345L3.66471 0.443645C3.88516 0.158122 4.18182 4.19381e-07 4.5004 4.2318e-07C4.81877 -6.44229e-05 5.11535 0.156246 5.33573 0.442092Z" fill="white"/>
      </svg>
    );
  }
  return (
    <svg onClick={() => setIsActive(!isActive)} className={isActive ? 'active' : ''} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="linear-gradient" gradientTransform="rotate(65)">
        <stop offset="0%" stopColor="#FDD226"/>
        <stop offset="100%" stopColor="#FF5753"/>
      </linearGradient>
      <path opacity="0.4" d="M3.66427 5.55791L0.241871 1.12017C0.0837077 0.915227 -3.09796e-08 0.708732 -2.34771e-08 0.537094C-8.97248e-09 0.205266 0.300007 1.31137e-08 0.802181 3.50644e-08L8.19898 3.58389e-07C8.70057 3.80314e-07 9 0.205008 9 0.53606C9 0.707956 8.91622 0.911153 8.75762 1.11655L5.33529 5.55636C5.11484 5.84188 4.81818 6 4.4996 6C4.18123 6.00006 3.88465 5.84375 3.66427 5.55791Z" fill="white"/>
    </svg>
  );
};

export default Arrow;