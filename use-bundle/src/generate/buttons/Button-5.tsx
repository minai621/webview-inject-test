import React from 'react';
import './Button-5.css';
import { randomBoolean_5 } from '../utils';

const Button5 = () => {
  const handleClick = () => {
    console.log(randomBoolean_5);
  };

  return <button className="button-5" onClick={handleClick}>979EF</button>;
};

export default Button5;