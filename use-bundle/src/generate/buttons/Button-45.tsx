import React from 'react';
import './Button-45.css';
import { randomBoolean_45 } from '../utils';

const Button45 = () => {
  const handleClick = () => {
    console.log(randomBoolean_45);
  };

  return <button className="button-45" onClick={handleClick}>KXV4T</button>;
};

export default Button45;