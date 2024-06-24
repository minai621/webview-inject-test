import React from 'react';
import './Button-50.css';
import { randomDate_50 } from '../utils';

const Button50 = () => {
  const handleClick = () => {
    console.log(randomDate_50);
  };

  return <button className="button-50" onClick={handleClick}>JFTCI</button>;
};

export default Button50;