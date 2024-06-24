import React from 'react';
import './Button-13.css';
import { randomArray_13 } from '../utils';

const Button13 = () => {
  const handleClick = () => {
    console.log(randomArray_13);
  };

  return <button className="button-13" onClick={handleClick}>YT3MW</button>;
};

export default Button13;