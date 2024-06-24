import React from 'react';
import './Button-16.css';
import { randomNumber_16 } from '../utils';

const Button16 = () => {
  const handleClick = () => {
    console.log(randomNumber_16);
  };

  return <button className="button-16" onClick={handleClick}>DQPKD</button>;
};

export default Button16;