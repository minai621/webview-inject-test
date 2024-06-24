import React from 'react';
import './Button-20.css';
import { randomNumber_20 } from '../utils';

const Button20 = () => {
  const handleClick = () => {
    console.log(randomNumber_20);
  };

  return <button className="button-20" onClick={handleClick}>SKY1J</button>;
};

export default Button20;