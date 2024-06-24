import React from 'react';
import './Button-22.css';
import { randomBoolean_22 } from '../utils';

const Button22 = () => {
  const handleClick = () => {
    console.log(randomBoolean_22);
  };

  return <button className="button-22" onClick={handleClick}>6KFEN</button>;
};

export default Button22;