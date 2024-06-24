import React from 'react';
import './Button-36.css';
import { randomBoolean_36 } from '../utils';

const Button36 = () => {
  const handleClick = () => {
    console.log(randomBoolean_36);
  };

  return <button className="button-36" onClick={handleClick}>X744A</button>;
};

export default Button36;