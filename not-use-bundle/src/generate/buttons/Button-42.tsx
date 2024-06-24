import React from 'react';
import './Button-42.css';
import { randomDate_42 } from '../utils';

const Button42 = () => {
  const handleClick = () => {
    console.log(randomDate_42);
  };

  return <button className="button-42" onClick={handleClick}>VQUPF</button>;
};

export default Button42;