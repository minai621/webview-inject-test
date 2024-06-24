import React from 'react';
import './Button-81.css';
import { randomArray_81 } from '../utils';

const Button81 = () => {
  const handleClick = () => {
    console.log(randomArray_81);
  };

  return <button className="button-81" onClick={handleClick}>PELTF</button>;
};

export default Button81;