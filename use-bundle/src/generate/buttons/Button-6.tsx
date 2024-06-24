import React from 'react';
import './Button-6.css';
import { randomArray_6 } from '../utils';

const Button6 = () => {
  const handleClick = () => {
    console.log(randomArray_6);
  };

  return <button className="button-6" onClick={handleClick}>MYSLS</button>;
};

export default Button6;