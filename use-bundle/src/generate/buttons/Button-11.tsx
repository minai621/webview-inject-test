import React from 'react';
import './Button-11.css';
import { randomArray_11 } from '../utils';

const Button11 = () => {
  const handleClick = () => {
    console.log(randomArray_11);
  };

  return <button className="button-11" onClick={handleClick}>WC3M2</button>;
};

export default Button11;