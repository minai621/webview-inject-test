import React from 'react';
import './Button-4.css';
import { randomArray_4 } from '../utils';

const Button4 = () => {
  const handleClick = () => {
    console.log(randomArray_4);
  };

  return <button className="button-4" onClick={handleClick}>FXV6Q</button>;
};

export default Button4;