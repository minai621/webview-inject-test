import React from 'react';
import './Button-34.css';
import { randomNumber_34 } from '../utils';

const Button34 = () => {
  const handleClick = () => {
    console.log(randomNumber_34);
  };

  return <button className="button-34" onClick={handleClick}>NDJLY</button>;
};

export default Button34;