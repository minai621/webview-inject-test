import React from 'react';
import './Button-35.css';
import { randomNumber_35 } from '../utils';

const Button35 = () => {
  const handleClick = () => {
    console.log(randomNumber_35);
  };

  return <button className="button-35" onClick={handleClick}>LJHF2</button>;
};

export default Button35;