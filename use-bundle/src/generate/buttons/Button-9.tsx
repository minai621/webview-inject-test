import React from 'react';
import './Button-9.css';
import { randomBoolean_9 } from '../utils';

const Button9 = () => {
  const handleClick = () => {
    console.log(randomBoolean_9);
  };

  return <button className="button-9" onClick={handleClick}>XTQXT</button>;
};

export default Button9;