import React from 'react';
import './Button-75.css';
import { randomNumber_75 } from '../utils';

const Button75 = () => {
  const handleClick = () => {
    console.log(randomNumber_75);
  };

  return <button className="button-75" onClick={handleClick}>S6YKW</button>;
};

export default Button75;