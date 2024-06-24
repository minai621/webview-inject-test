import React from 'react';
import './Button-27.css';
import { randomNumber_27 } from '../utils';

const Button27 = () => {
  const handleClick = () => {
    console.log(randomNumber_27);
  };

  return <button className="button-27" onClick={handleClick}>B0I1L</button>;
};

export default Button27;