import React from 'react';
import './Button-15.css';
import { randomDate_15 } from '../utils';

const Button15 = () => {
  const handleClick = () => {
    console.log(randomDate_15);
  };

  return <button className="button-15" onClick={handleClick}>YPEHM</button>;
};

export default Button15;