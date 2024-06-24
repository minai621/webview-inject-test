import React from 'react';
import './Button-28.css';
import { randomNumber_28 } from '../utils';

const Button28 = () => {
  const handleClick = () => {
    console.log(randomNumber_28);
  };

  return <button className="button-28" onClick={handleClick}>3LYDH</button>;
};

export default Button28;