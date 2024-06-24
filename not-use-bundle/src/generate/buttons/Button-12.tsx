import React from 'react';
import './Button-12.css';
import { randomString_12 } from '../utils';

const Button12 = () => {
  const handleClick = () => {
    console.log(randomString_12);
  };

  return <button className="button-12" onClick={handleClick}>M48NY</button>;
};

export default Button12;