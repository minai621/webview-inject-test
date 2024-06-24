import React from 'react';
import './Button-83.css';
import { randomNumber_83 } from '../utils';

const Button83 = () => {
  const handleClick = () => {
    console.log(randomNumber_83);
  };

  return <button className="button-83" onClick={handleClick}>LCMT0</button>;
};

export default Button83;