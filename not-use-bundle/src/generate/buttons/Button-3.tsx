import React from 'react';
import './Button-3.css';
import { randomDate_3 } from '../utils';

const Button3 = () => {
  const handleClick = () => {
    console.log(randomDate_3);
  };

  return <button className="button-3" onClick={handleClick}>47DB6</button>;
};

export default Button3;