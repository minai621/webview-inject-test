import React from 'react';
import './Button-86.css';
import { randomBoolean_86 } from '../utils';

const Button86 = () => {
  const handleClick = () => {
    console.log(randomBoolean_86);
  };

  return <button className="button-86" onClick={handleClick}>XNRL7</button>;
};

export default Button86;