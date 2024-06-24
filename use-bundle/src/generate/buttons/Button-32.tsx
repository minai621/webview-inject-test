import React from 'react';
import './Button-32.css';
import { randomBoolean_32 } from '../utils';

const Button32 = () => {
  const handleClick = () => {
    console.log(randomBoolean_32);
  };

  return <button className="button-32" onClick={handleClick}>DA4W6</button>;
};

export default Button32;