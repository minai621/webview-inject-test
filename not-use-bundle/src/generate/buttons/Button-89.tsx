import React from 'react';
import './Button-89.css';
import { randomNumber_89 } from '../utils';

const Button89 = () => {
  const handleClick = () => {
    console.log(randomNumber_89);
  };

  return <button className="button-89" onClick={handleClick}>DLALD</button>;
};

export default Button89;