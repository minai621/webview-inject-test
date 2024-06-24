import React from 'react';
import './Button-8.css';
import { randomDate_8 } from '../utils';

const Button8 = () => {
  const handleClick = () => {
    console.log(randomDate_8);
  };

  return <button className="button-8" onClick={handleClick}>9493W</button>;
};

export default Button8;