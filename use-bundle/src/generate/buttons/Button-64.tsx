import React from 'react';
import './Button-64.css';
import { randomArray_64 } from '../utils';

const Button64 = () => {
  const handleClick = () => {
    console.log(randomArray_64);
  };

  return <button className="button-64" onClick={handleClick}>OTKES</button>;
};

export default Button64;