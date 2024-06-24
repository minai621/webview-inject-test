import React from 'react';
import './Button-90.css';
import { randomNumber_90 } from '../utils';

const Button90 = () => {
  const handleClick = () => {
    console.log(randomNumber_90);
  };

  return <button className="button-90" onClick={handleClick}>CTSHJ</button>;
};

export default Button90;