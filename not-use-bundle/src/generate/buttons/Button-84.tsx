import React from 'react';
import './Button-84.css';
import { randomNumber_84 } from '../utils';

const Button84 = () => {
  const handleClick = () => {
    console.log(randomNumber_84);
  };

  return <button className="button-84" onClick={handleClick}>UVQM0</button>;
};

export default Button84;