import React from 'react';
import './Button-80.css';
import { randomArray_80 } from '../utils';

const Button80 = () => {
  const handleClick = () => {
    console.log(randomArray_80);
  };

  return <button className="button-80" onClick={handleClick}>PQNFF</button>;
};

export default Button80;