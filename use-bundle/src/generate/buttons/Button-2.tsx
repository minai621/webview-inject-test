import React from 'react';
import './Button-2.css';
import { randomDate_2 } from '../utils';

const Button2 = () => {
  const handleClick = () => {
    console.log(randomDate_2);
  };

  return <button className="button-2" onClick={handleClick}>Q1D3Q</button>;
};

export default Button2;