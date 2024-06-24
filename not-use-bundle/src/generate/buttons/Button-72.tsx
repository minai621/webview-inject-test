import React from 'react';
import './Button-72.css';
import { randomNumber_72 } from '../utils';

const Button72 = () => {
  const handleClick = () => {
    console.log(randomNumber_72);
  };

  return <button className="button-72" onClick={handleClick}>RD5J4</button>;
};

export default Button72;