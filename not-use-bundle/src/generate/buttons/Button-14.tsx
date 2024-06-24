import React from 'react';
import './Button-14.css';
import { randomArray_14 } from '../utils';

const Button14 = () => {
  const handleClick = () => {
    console.log(randomArray_14);
  };

  return <button className="button-14" onClick={handleClick}>K1L2K</button>;
};

export default Button14;