import React from 'react';
import './Button-88.css';
import { randomNumber_88 } from '../utils';

const Button88 = () => {
  const handleClick = () => {
    console.log(randomNumber_88);
  };

  return <button className="button-88" onClick={handleClick}>AB084</button>;
};

export default Button88;