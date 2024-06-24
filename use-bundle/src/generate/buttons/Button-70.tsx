import React from 'react';
import './Button-70.css';
import { randomString_70 } from '../utils';

const Button70 = () => {
  const handleClick = () => {
    console.log(randomString_70);
  };

  return <button className="button-70" onClick={handleClick}>BW2TP</button>;
};

export default Button70;