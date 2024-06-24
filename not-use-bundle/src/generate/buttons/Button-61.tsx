import React from 'react';
import './Button-61.css';
import { randomBoolean_61 } from '../utils';

const Button61 = () => {
  const handleClick = () => {
    console.log(randomBoolean_61);
  };

  return <button className="button-61" onClick={handleClick}>4QR15</button>;
};

export default Button61;