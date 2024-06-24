import React from 'react';
import './Button-24.css';
import { randomBoolean_24 } from '../utils';

const Button24 = () => {
  const handleClick = () => {
    console.log(randomBoolean_24);
  };

  return <button className="button-24" onClick={handleClick}>221RR</button>;
};

export default Button24;