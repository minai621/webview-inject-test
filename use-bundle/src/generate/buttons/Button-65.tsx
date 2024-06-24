import React from 'react';
import './Button-65.css';
import { randomNumber_65 } from '../utils';

const Button65 = () => {
  const handleClick = () => {
    console.log(randomNumber_65);
  };

  return <button className="button-65" onClick={handleClick}>RRG27</button>;
};

export default Button65;