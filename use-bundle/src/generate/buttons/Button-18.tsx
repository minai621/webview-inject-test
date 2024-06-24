import React from 'react';
import './Button-18.css';
import { randomBoolean_18 } from '../utils';

const Button18 = () => {
  const handleClick = () => {
    console.log(randomBoolean_18);
  };

  return <button className="button-18" onClick={handleClick}>R9ELT</button>;
};

export default Button18;