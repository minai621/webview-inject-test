import React from 'react';
import './Button-99.css';
import { randomString_99 } from '../utils';

const Button99 = () => {
  const handleClick = () => {
    console.log(randomString_99);
  };

  return <button className="button-99" onClick={handleClick}>41FR1</button>;
};

export default Button99;