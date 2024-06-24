import React from 'react';
import './Button-49.css';
import { randomNumber_49 } from '../utils';

const Button49 = () => {
  const handleClick = () => {
    console.log(randomNumber_49);
  };

  return <button className="button-49" onClick={handleClick}>XDV12</button>;
};

export default Button49;